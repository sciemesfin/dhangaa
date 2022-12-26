import { Share } from "react-native";
const share = {
    async on(title: any) {
        try {
            const result = await Share.share({
                message:
                    title,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error:any) {
            alert(error.message);
        }
    }
}
export default share