import { useRef } from "react";

import ModalDialog from "../components/ModalDialog";

function ModalDemo() {
    const modal = useRef();

    return (
        <>
            <h1>Click to open Modal</h1>
            <button onClick={() => modal.current.showModal()}>Click me</button>
            <ModalDialog modal={modal} />
        </>
    );
}

export default ModalDemo;
