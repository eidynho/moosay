import { BaseDropdown } from "./headless-ui/BaseDropdown";
import { DownloadModal } from "./modals/DownloadModal";
import { ShareModal } from "./modals/ShareModal";

export function AppOptionsDropdown() {
    return (
        <BaseDropdown>
            <>
                <ShareModal />
                <DownloadModal />
            </>
        </BaseDropdown>
    );
}
