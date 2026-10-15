/**
 * Thông tin chung của seminar.
 * Để trống (chuỗi rỗng) thì phần đó sẽ tự ẩn trên trang bìa.
 */
export const COURSE = 'Hệ điều hành Linux và ứng dụng'
export const TOPIC = 'Chủ đề 3' as string
export const LECTURER = 'Lê Hà Minh' as string // có thể thêm học hàm, ví dụ 'ThS. Lê Hà Minh'
export const GROUP_NAME = '' as string // Tên hoặc số nhóm
export const SEMESTER = '' as string // Học kỳ / năm học
export const LOGO_SRC = '' as string // Đường dẫn logo, ví dụ '/logo-fit.png' (đặt trong thư mục public/)

export const MEMBERS: { id: string; name: string }[] = [
  { id: '24120489', name: 'Nguyễn Hữu Tường Vân' },
  { id: '24120403', name: 'Nguyễn Lê Đức Nhật' },
  { id: '24120492', name: 'Nguyễn Tấn Vinh' },
  { id: '24120459', name: 'Huỳnh Minh Thuận' },
  { id: '24120251', name: 'Huỳnh Bá Thi' },
]
