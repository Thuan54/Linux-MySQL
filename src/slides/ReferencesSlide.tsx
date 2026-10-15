import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'

export default function ReferencesSlide() {
  return (
    <SlideFrame title="Tài liệu tham khảo" sec={SEC.end}>
      <Ul
        items={[
          'MySQL 8.0 Reference Manual, Oracle Corporation: https://dev.mysql.com/doc/refman/8.0/en/',
          'B. Schwartz, P. Zaitsev, V. Tkachenko, High Performance MySQL, 4th Edition, O\'Reilly Media',
          'A. Petrov, Database Internals: A Deep Dive into How Distributed Data Systems Work, O\'Reilly Media',
          'S. Pachev, Understanding MySQL Internals, O\'Reilly Media',
          'reveal.js: https://revealjs.com/',
        ]}
      />
    </SlideFrame>
  )
}
