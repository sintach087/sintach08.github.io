import Swal from 'sweetalert2';

export class Message {
    Success = (title: string, message: string) => {
        Swal.fire({
            title: title,
            icon: 'info',
            text: message
        });
    }

    Error = (message: string) => {
        Swal.fire({
            icon: 'error',
            title: message,
            text: '',
        });
    }
}