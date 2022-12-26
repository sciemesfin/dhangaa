import React from "react";
import axios from "axios";
import axiosRetry from "axios-retry";
import AuthService from "./auth.service";

//import Error components
import { Snackbar } from "../components";

const Request = axios.create();

axiosRetry(Request, {
    retries: 3,
});

/**
 * Request interceptor
 */

Request.interceptors.request.use(async (config) => {
    const token = await AuthService.getToken()
    if (token) {
        if (config.method !== "OPTIONS") {
            // config.headers["Authorization"] = "bearer " + token;
        }
    }
    return config;
});

/**
 * Response interceptor
 */

Request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        // connection problem
        if (err && err.message && err.message === "Network Error") {
            < Snackbar
                title="Network Error"
                desc="No Internet connection is detected."
                open={true}
            />
            throw err;
        }
        if (!err || !err.response) {
            throw err;
        }

        const { status } = err.response;
        const url = err.request.responseURL.split("/");
        const path = url[url.length - 1];

        // 401 - UNAUTHORIZED
        if (status === 401) {
            if (path !== "login" && path !== "logout-user") {
                < Snackbar
                    title="404"
                    desc="Unauthorized user."
                    open={true}
                />
            }
            throw err.response.data.error;
        }
        // 500 - Internal Error
        if (status >= 500) {
            < Snackbar
                title="500"
                desc="Internal Server Error."
                open={true}
            />
            throw err.response.data.error;
        }
        // OTHER
        throw err.response.data.error;
    }
);

export default Request;