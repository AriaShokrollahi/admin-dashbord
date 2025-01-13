document.getElementById('fileForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            document.getElementById('response').textContent = 'فایل با موفقیت ارسال شد!';
        } else {
            document.getElementById('response').textContent = 'خطایی رخ داد.';
        }
    } catch (error) {
        document.getElementById('response').textContent = 'خطا در ارسال فایل: ' + error.message;
    }
});

const uploadTrigger = document.querySelector('.upload-trigger');
const fileInput = document.getElementById('fileInput');

// رویداد کلیک برای باز کردن پنجره انتخاب فایل
uploadTrigger.addEventListener('click', () => {
    fileInput.click(); // باز کردن input انتخاب فایل
});

// رویداد تغییر (هنگامی که فایل انتخاب شد)
fileInput.addEventListener('change', () => {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        alert(`فایل "${selectedFile.name}" انتخاب شد!`);
        // اینجا می‌توانید کد ارسال فایل به سرور را اضافه کنید
    }
});

document.getElementById('actual-btn').addEventListener('change', function(event) {
    const file = event.target.files[0]; // گرفتن فایل انتخاب شده
    const fileNameDisplay = document.getElementById('file-name'); // عنصر نمایش نام فایل

    if (file) {
      fileNameDisplay.textContent = `نام فایل: ${file.name}`; // نمایش نام فایل
    } else {
      fileNameDisplay.textContent = 'هیچ فایلی انتخاب نشده است.'; // حالت پیش‌فرض
    }
  });