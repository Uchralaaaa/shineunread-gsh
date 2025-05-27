import React, { FC, HTMLAttributes } from 'react';

interface FooterProps extends HTMLAttributes<HTMLElement> {
  // You can add any custom props here if needed
}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={`bg-black text-white p-6 font-mono text-xs ${className || ''}`} {...props}>
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">UNREAD™</h1>
          <div className="mb-2">
            <p>Хлытрын комплекс чувств кипрак</p>
            <p className="font-bold">Контент нейтируваж</p>
          </div>
          <div>
            <p>Хлытрын комплекс чувств кипрак</p>
            <p className="font-bold">Эвенг дээр хакирак</p>
          </div>
          <div className="border-t border-gray-600 my-4"></div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <h2 className="text-lg font-bold mb-4">ВулингУДА</h2>
            <div className="space-y-2">
              <p>Опыток бизнес</p>
              <p>Technorem</p>
              <p>Би корсон эскипации кв?</p>
              <p>Мартуштай</p>
              <p>Челово</p>
              <p>Номин тухай</p>
              <p>7 колонных годы</p>
              <p>Вулканично</p>
              <p>Тот портой молчал</p>
              <p>Тайгбаризм на</p>
              <p>10 органы, 10 акции</p>
              <p>Тактай оффис</p>
              <p>Зоонитой букви</p>
              <p>8 минуты укс. кв?</p>
              <p>Солень</p>
              <p>English</p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-lg font-bold mb-4">Компания</h2>
            <div className="space-y-2">
              <p>Упамятовано Н240</p>
              <p>СВД, 9-р корсон, Америка и туральск</p>
              <p>Тангардия марша группа</p>
              <p>4976 9973 1632</p>
              <p>Зоносос</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-4 border-t border-gray-600">
          <p className="font-bold text-center">www.unread.media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;