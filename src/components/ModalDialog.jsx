function ModalDialog({ modal }) {
    return (
        <dialog ref={modal}>
            <div>
                <h1>Hello, Im Modal made by dialog</h1>
                <button onClick={() => modal.current.close()}>close</button>
            </div>
        </dialog>
    );
}

export default ModalDialog;
