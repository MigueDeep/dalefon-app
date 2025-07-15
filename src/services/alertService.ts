import Swal from "sweetalert2";

export const alertService = {
    success: (message: string, title: string = "Éxito") => {
        Swal.fire({
            icon: "success",
            title,
            text: message,
            confirmButtonColor: "#3085d6",
        });
    },

    error: (message: string, title: string = "Error") => {
        Swal.fire({
            icon: "error",
            title,
            text: message,
            confirmButtonColor: "#d33",
        });
    },

    confirm: async (
        message: string,
        title: string = "¿Estás seguro?"
    ): Promise<boolean> => {
        const result = await Swal.fire({
            title,
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#aaa",
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
        });
        return result.isConfirmed;
    },
};
