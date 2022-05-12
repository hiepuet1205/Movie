# UET - ĐẠI HỌC QUỐC GIA HÀ NỘI

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# BÁO CÁO MÔ TẢ DỰ ÁN

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# INT2208_23 - CÔNG NGHỆ PHẦN MỀM

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# NHÓM 06

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## THÀNH VIÊN

- Đỗ Lê Mạnh Hùng - _20020322_ - [Báo cáo cá nhân](https://github.com/dolemanhhung/CNPM/blob/769cef54e50deb80008f7b430e9cd422ca9be028/B%C3%A1o%20c%C3%A1o%20c%C3%A1%20nh%C3%A2n.md)
- Nguyễn Quang Minh - _20020146_ - [Báo cáo cá nhân](https://github.com/dolemanhhung/CNPM/blob/4216f2d557487f52583a78077c9e4a481457146c/Nh%C3%B3m%2006%20-%20Nguy%E1%BB%85n%20Quang%20Minh.md)
- Nguyễn Ngọc Hiệp - _20021349_ - [Báo cáo cá nhân](https://github.com/dolemanhhung/CNPM/blob/4edab81956d5ef4b5c8e422d93da0106317ae2e3/Nh%C3%B3m%2006%20-%20Nguy%E1%BB%85n%20Ng%E1%BB%8Dc%20Hi%E1%BB%87p.md)
- Nguyễn Tuấn Nam - _20021398_ - [Báo cáo cá nhân](https://github.com/dolemanhhung/CNPM/blob/2da7505dd2690f5334fbb621c493d5d5fddf65ec/CNPM_Nguy%E1%BB%85n%20Tu%E1%BA%A5n%20Nam_Nh%C3%B3m%2006.md)
- Ngô Văn Minh Thắng - _20020155_ - [Báo cáo cá nhân](https://github.com/dolemanhhung/CNPM/blob/04357bd7b8c6e7c18c2b257db985493f8009ffa2/Nh%C3%B3m%2006%20-%20Ng%C3%B4%20V%C4%83n%20Minh%20Th%E1%BA%AFng.md)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ĐỀ TÀI NHÓM

**Tên sản phẩm:** _PhimmoiUET_

**Đối tượng hướng đến:** _Sản phẩm hướng đến tất cả mọi người, đặc biệt dành cho các bạn sinh viên UET từ các nơi khác tới nói riêng và sinh viên ĐHQGHN nói chung._

**Lý do tạo nên sản phẩm:** _Hiện nay, với sự phát triển nhanh chóng của xã hội, nhu cầu giải trí của con người ngày càng cao hơn, trong đó có xem phim. Tuy vậy, việc ra rạp đặt phim đôi khi gây ra nhiều bất tiện như không có phương tiện hay hết vé xem phim, ... Thấu hiểu những khó khăn đó, đặc biệt là các bạn sinh viên từ các tỉnh khác về Hà Nội để học tập, vui chơi giải trí, nhưng đôi khi thời gian và điều kiện không cho phép, nhóm 06 chúng em đã tạo nên sản phẩm web đặt vé xem phim này với mục đích giúp mọi người tiết kiệm được thời gian và công sức, chúng ta không cần phải đi ra ngoài đặt vé trong những ngày nóng nực của mùa hè, đặc biệt là thời điểm hiện tại giá xăng đang rất cao, chưa kể có những bạn không có phương tiện và thời gian để đi. Sản phẩm hướng đặc biệt tới các bạn sinh viên của UET và ĐHQGHN nói riêng và toàn thể mọi người nói chung. Rất mong mọi người sẽ đón nhận nó ^^_

**CHỨC NĂNG CHÍNH CỦA PHẦN MỀM:**

- Tìm phim hiện đang hot, phim chiếu rạp đang chiếu.
- Đặt vé xem phim nhanh, gọn, tiết kiệm thời gian và công sức.
- Nghiên cứu, tìm thêm thông tin về bộ phim ưa thích trước khi quyết định mua.
- Giao lưu cộng đồng với nhau (nhận xét phim, đánh giá phim, ...)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Công cụ sử dụng

- HTML
- CSS
- JavaScript
- Django
- ReactJs

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Hướng dẫn cài đặt và sử dụng sản phẩm

- Clone mã nguồn trên github.

***1. Backend***

- Mở commandline, chuyển tới thư mục btl_cnpm/backend bằng câu lệnh "cd (source)".
- Gõ `python manange.py runserver` 
- Mở trình duyệt, nhập <http://127.0.0.1:8000/admin>
- Sử dụng ID hiepvbhpnbk@gmail.com và pass _hiepuetnbk_ để login
- Trang web quản lý hiện ra, mọi người có thể thấy các mục quản lý phim, diễn viên, danh mục, người dùng,...

![Backend landing page](demo_pics/Screenshot%202022-05-07%20214510.png)

- Người dùng có thể sửa đổi các thông tin liên quan trong từng mục riêng

![edit details](demo_pics/Screenshot%202022-05-07%20214712.png)

***2. Frontend***

- Mở commandline, chuyển tới thư mục btl_cnpm/frontend bằng câu lệnh "cd (source)".
- Gõ `npm start` 
- Sử dụng ID hiepvbhpnbk@gmail.com và pass _hiepuetnbk_ để login.
- Trang chủ hiện ra, người dùng có thể nhìn thấy những bộ phim đang chiếu và sắp chiếu.

![Frontend landing page](demo_pics/Screenshot%202022-05-08%20122640.png)

- Từ tài khoản cá nhân, người dùng có thể truy cập các tính năng quản lý tài khoản, giỏ hàng cá nhân, đơn đặt hàng và đăng xuất

![Account management](demo_pics/Screenshot%202022-05-08%20123302.png)

- Ngoài trang chủ, người dùng có thể xem chi tiết về từng bộ phim hoặc diễn viên yêu thích

![Movie details](demo_pics/Screenshot%202022-05-08%20123610.png)

![Actor details](demo_pics/Screenshot%202022-05-08%20123627.png)

- Người dùng có thể đặt bộ phim mình muốn sử dụng nút Book Now và thanh toán trong giỏ hàng

![Booking](demo_pics/Screenshot%202022-05-08%20134135.png)

![Cart](demo_pics/Screenshot%202022-05-08%20134427.png)

-  [Tìm hiểu thêm](https://github.com/hiepuet1205/btl_cnpm/blob/216d46cab7c60234f1f6092c88f4e9c78ad0dc6b/frontend/README.md)

------------------------------------------------------------------------------------------------

## Quy trình phát triển Scrum
- Sprint 1 | 13/03 - 27/03 : Lên ý tưởng cho dự án, phác thảo ban đầu cho dự án và tìm hiểu các công nghệ cần dùng cho dự án.
- Sprint 2 | 28/03 - 10/04 :  Bắt đầu tiến hành sản phẩm, phân chia công việc cho mỗi cá nhân trong nhóm.
- Sprint 3 | 11/04 - 24/04: Hoàn thành tạm thời sản phẩm, cả nhóm tiến hành kiểm thử.
- Sprint 4 | 25/04/2022 - hiện tại: Thu thập tài liệu, viết báo cáo và tiến hành demo sản phẩm.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Vai trò từng thành viên

- _Nguyễn Ngọc Hiệp_: Front-end Developer - (20%)
- _Nguyễn Tuấn Nam_: Front-end Developer - (20%)
- _Ngô Văn Minh Thắng_: Front-end Developer - (20%)
- _Nguyễn Quang Minh_: Thiết kế cơ sở dữ liệu - (20%)
- _Đỗ Lê Mạnh Hùng_: Thiết kế dữ liệu phim và kiểm thử - (20%)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Báo cáo sản phẩm

   [Click here](https://docs.google.com/document/d/1DRPeFX_h7-ul2MFgwT-dNL6u4Mp4Hdm8NatMjZZ2mQg/edit?usp=sharing)

---

## Liên kết tham khảo

- [Icons for front-end](https://boxicons.com/)
- [Draw CSDL](https://erdplus.com/)
- [Film Data](https://www.imdb.com/?ref_=nv_home)
- [Tham khảo](https://github.com/facebook/create-react-app)
- [Tham khảo](https://www.wikimedia.org/)
- [Tham khảo](https://tienminhvy.com/hoc-tap/gioi-thieu-ve-html5/)
- [Tham khảo](https://gc0904g6.wordpress.com/2014/04/03/gioi-thieu-css-3/)
- [Tham khảo](https://jobs.hybrid-technologies.vn/blog/cac-quy-trinh-phat-trien-phan-mem/#21_Mo_hinh_thac_nuoc)
