document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("actual-btn");
    const sendButton = document.querySelector(".btn-primary.chat-send");

    // وقتی فایل انتخاب شد
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            // Toast سفارشی برای فایل انتخاب‌شده
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: `فایل انتخاب شد: ${file.name}`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#C98B8B',
                color: '#000000',
                iconColor: '#28a745',
                customClass: {
                    popup: 'custom-toast',
                },
            });
        }
    });

    // وقتی دکمه ارسال کلیک شد
    sendButton.addEventListener("click", function (event) {
        event.preventDefault();
        const file = fileInput.files[0];
        if (!file) {
            // Toast سفارشی برای خطا هنگام ارسال فایل
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'لطفاً یک فایل انتخاب کنید!',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f8d7da',
                color: '#000000',
                iconColor: '#dc3545',
                customClass: {
                    popup: 'custom-toast',
                },
            });
            return;
        }

        // ارسال فایل به سرور
        const formData = new FormData();
        formData.append("file", file);

        fetch("/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Toast موفقیت ارسال فایل
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'فایل با موفقیت ارسال شد!',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        background: '#C98B8B',
                        color: '#000000',
                        iconColor: '#28a745',
                        customClass: {
                            popup: 'custom-toast',
                        },
                    });
                } else {
                    // Toast خطا در ارسال فایل
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: 'مشکلی در ارسال فایل وجود دارد.',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        background: '#f8d7da',
                        color: '#000000',
                        iconColor: '#dc3545',
                        customClass: {
                            popup: 'custom-toast',
                        },
                    });
                }
            })
            .catch((error) => {
                console.error("خطا در ارسال فایل:", error);
                // Toast خطا در ارسال فایل
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'خطا در ارسال فایل!',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#f8d7da',
                    color: '#000000',
                    iconColor: '#dc3545',
                    customClass: {
                        popup: 'custom-toast',
                    },
                });
            });
    });
});
