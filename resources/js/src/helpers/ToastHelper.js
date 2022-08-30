import Toastify from "toastify-js";
import cash from "cash-dom";

export const pushToast = (modalId) => {
    Toastify({
        node: cash(`#${modalId}`)
            .clone()
            .removeClass('hidden')[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'right',
        stopOnFocus: true
    }).showToast()
}
