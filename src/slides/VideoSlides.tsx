import type { ReactNode } from 'react'
import video1 from '../video/1.webm'
import video2 from '../video/2.webm'
import video3 from '../video/3.webm'
import video4 from '../video/4.webm'
import video5 from '../video/5.webm'
import SlideFrame from '../components/SlideFrame'
import { SEC } from '../data/sections'

const videos: { title: string; description: ReactNode; src: string }[] = [
  {
    title: 'Bảo mật cài đặt MySQL',
    description: (
      <>
        Tìm hiểu khi nào nên chạy lệnh <code>mysql_secure_installation</code> và
        những câu hỏi cấu hình bảo mật mà lệnh sẽ yêu cầu.
      </>
    ),
    src: video1,
  },
  {
    title: 'Tạo tài khoản kết nối từ xa',
    description: (
      <>
        Tạo người dùng có thể kết nối MySQL từ xa và kiểm tra danh sách người
        dùng hiện có.
      </>
    ),
    src: video2,
  },
  {
    title: 'Cấu hình Slow Query Log',
    description: (
      <>
        Xem cấu hình Slow Query Log và thời gian truy vấn dài, mô phỏng truy vấn
        chậm, sau đó dùng <code>mysqldumpslow</code> để phân tích log.
      </>
    ),
    src: video3,
  },
  {
    title: 'Sao lưu và khôi phục cơ sở dữ liệu',
    description: (
      <>
        Dùng <code>mysqldump</code> để lưu bản sao lưu vào tệp SQL, sau đó nạp
        lại bằng <code>mysql &lt; bck.sql</code> trong cơ sở dữ liệu thử nghiệm
        và kiểm tra dữ liệu.
      </>
    ),
    src: video4,
  },
  {
    title: 'Khắc phục sự cố dịch vụ MySQL',
    description: (
      <>
        Kiểm tra dịch vụ bằng <code>systemctl status</code>, mô phỏng lỗi quyền
        sở hữu trong <code>/var/lib/mysql/</code>, xem
        <code>/var/log/mysql/error.log</code> để tìm nguyên nhân, rồi khôi phục
        quyền sở hữu ban đầu.
      </>
    ),
    src: video5,
  },
]

export default function VideoSlides() {
  return videos.map(({ title, description, src }, index) => (
    <SlideFrame key={src} title={`${title}`} sec={SEC.demo}>
      <div className="grid h-full grid-cols-[1.5fr_1fr] items-center gap-8 pb-6">
        <video
          className="w-full rounded-lg bg-black"
          controls
          playsInline
          preload="metadata"
          aria-label={`Video ${index + 1}: ${title}`}
          src={src}
        />
        <div className="rounded-lg border border-line border-t-4 border-t-fit bg-white p-6">
          <h3 className="mb-4 text-2xl font-bold text-fit">{title}</h3>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </SlideFrame>
  ))
}
