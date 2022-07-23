import React from "react";
import CreateModal from "./components/createModal/CreateModal";

import EditModal from "./components/editModal/EditModal";
import InfoModal from "./components/infoModal/InfoModal";

const UserModal = () => {
    return (
        <>
            <EditModal />
            <CreateModal />
            <InfoModal />
        </>
    );
};

export default UserModal;
