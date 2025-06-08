let mangSoNguyen = [];

// Thêm số vào mảng
function themSo() {
    const input = document.getElementById('numberInput').value;
    if (input !== '') {
        mangSoNguyen.push(parseInt(input));
        document.getElementById('numberInput').value = '';
    } else {
        alert('Vui lòng nhập số!');
    }
}

// Hiển thị mảng
function hienThiMang() {
    document.getElementById('ketQua').innerText = 'Mảng hiện tại: ' + mangSoNguyen.join(', ');
}

// Sắp xếp mảng theo thứ tự tăng dần
function sapXepMang() {
    mangSoNguyen.sort((a, b) => a - b);
    document.getElementById('ketQua').innerText = 'Mảng sau khi sắp xếp: ' + mangSoNguyen.join(', ');
}

// Tìm số lớn nhất
function timSoLonNhat() {
    if (mangSoNguyen.length > 0) {
        const max = Math.max(...mangSoNguyen);
        document.getElementById('ketQua').innerText = 'Số lớn nhất: ' + max;
    } else {
        alert('Mảng đang trống!');
    }
}

// Tìm số nhỏ nhất
function timSoNhoNhat() {
    if (mangSoNguyen.length > 0) {
        const min = Math.min(...mangSoNguyen);
        document.getElementById('ketQua').innerText = 'Số nhỏ nhất: ' + min;
    } else {
        alert('Mảng đang trống!');
    }
}

// Tính tổng các số dương
function tongSoDuong() {
    let tong = 0;
    if (mangSoNguyen.length > 0) {
        for (let i = 0; i < mangSoNguyen.length; i++) {
            if (mangSoNguyen[i] > 0) {
                tong += mangSoNguyen[i];
            }
        }
        document.getElementById('ketQua').innerText = 'Tổng số dương: ' + tong;
    } else {
        alert('Mảng đang trống!');
    }
}

// Đếm số lượng số dương
function demSoDuong() {
    let dem = 0;
    if (mangSoNguyen.length > 0) {
        for (let i = 0; i < mangSoNguyen.length; i++) {
            if (mangSoNguyen[i] > 0) {
                dem++;
            }
        }
        document.getElementById('ketQua').innerText = 'Số lượng số dương: ' + dem;
    } else {
        alert('Mảng đang trống!');
    }
}

// Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    let min = Infinity;
    let timThay = false;
    if (mangSoNguyen.length > 0) {
        for (let i = 0; i < mangSoNguyen.length; i++) {
            if (mangSoNguyen[i] > 0 && mangSoNguyen[i] < min) {
                min = mangSoNguyen[i];
                timThay = true;
            }
        }
        if (timThay) {
            document.getElementById('ketQua').innerText = 'Số dương nhỏ nhất: ' + min;
        } else {
            document.getElementById('ketQua').innerText = 'Không có số dương trong mảng!';
        }
    } else {
        alert('Mảng đang trống!');
    }
}

// Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    let soChanCuoi = -1;
    for (let i = mangSoNguyen.length - 1; i >= 0; i--) {
        if (mangSoNguyen[i] % 2 === 0) {
            soChanCuoi = mangSoNguyen[i];
            break;
        }
    }
    document.getElementById('ketQua').innerText = 'Số chẵn cuối cùng: ' + soChanCuoi;
}

// Đổi chỗ 2 giá trị
function doiChoGiaTri() {
    const viTri1 = parseInt(prompt('Nhập vị trí thứ nhất:'));
    const viTri2 = parseInt(prompt('Nhập vị trí thứ hai:'));
    if (viTri1 >= 0 && viTri1 < mangSoNguyen.length && viTri2 >= 0 && viTri2 < mangSoNguyen.length) {
        const tam = mangSoNguyen[viTri1];
        mangSoNguyen[viTri1] = mangSoNguyen[viTri2];
        mangSoNguyen[viTri2] = tam;
        document.getElementById('ketQua').innerText = 'Mảng sau khi đổi chỗ: ' + mangSoNguyen.join(', ');
    } else {
        alert('Vị trí không hợp lệ!');
    }
}

// Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
    function laSoNguyenTo(so) {
        if (so <= 1) return false;
        for (let i = 2; i <= Math.sqrt(so); i++) {
            if (so % i === 0) return false;
        }
        return true;
    }

    let soNguyenTo = -1;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (laSoNguyenTo(mangSoNguyen[i])) {
            soNguyenTo = mangSoNguyen[i];
            break;
        }
    }
    document.getElementById('ketQua').innerText = 'Số nguyên tố đầu tiên: ' + soNguyenTo;
}

// Đếm số nguyên trong mảng số thực
function demSoNguyen() {
    const mangSoThuc = prompt('Nhập mảng số thực, cách nhau bằng dấu phẩy:').split(',').map(Number);
    let dem = 0;
    for (let i = 0; i < mangSoThuc.length; i++) {
        if (Number.isInteger(mangSoThuc[i])) {
            dem++;
        }
    }
    document.getElementById('ketQua').innerText = 'Số lượng số nguyên trong mảng số thực: ' + dem;
}

// So sánh số lượng số dương và số âm
function soSanhSoDuongVaSoAm() {
    let demDuong = 0;
    let demAm = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            demDuong++;
        } else if (mangSoNguyen[i] < 0) {
            demAm++;
        }
    }
    if (demDuong > demAm) {
        document.getElementById('ketQua').innerText = 'Số dương nhiều hơn số âm.';
    } else if (demDuong < demAm) {
        document.getElementById('ketQua').innerText = 'Số âm nhiều hơn số dương.';
    } else {
        document.getElementById('ketQua').innerText = 'Số dương và số âm bằng nhau.';
    }
}