import { useState } from "react";
import natureBalcony from "../images/image_1792834006149.jpg";
import natureFamily from "../images/image_1792834006866.jpg";
import natureGarden from "../images/image_1792834005571.jpg";
import natureHero from "../images/image_1792834007649.jpg";
import naturePool from "../images/image_1792834008670.jpg";
import natureLodge from "../images/image_1792834009426.jpg";
import natureResort from "../images/image_1792834010123.jpg";

type TemplateSlug = "x-template-next-011" | "x-template-next-012";

type Room = {
  name: string;
  description: string;
  amenities: string[];
  price: string;
  image: string;
};

type LodgingTemplate = {
  id: string;
  name: string;
  slug: TemplateSlug;
  category: string;
  tagline: string;
  about: string;
  theme: {
    primaryBtn: string;
    badge: string;
    heroBg: string;
    cardBorder: string;
  };
  rooms: Room[];
  facilities: string[];
  location: {
    address: string;
    directions: string;
    mapUrl: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    lineId: string;
    lineUrl: string;
  };
  gallery: string[];
};

const templatesData = {
  "x-template-next-011": {
    id: "11",
    name: "Baan Suan Lodge",
    slug: "x-template-next-011",
    category: "Accommodation / Nature",
    tagline: "พักผ่อนท่ามกลางธรรมชาติ กลับมาพักใจให้สดชื่น",
    about:
      "บ้านสวน ลอดจ์ ตั้งอยู่ท่ามกลางหุบเขาและสวนไม้ร่มรื่นในจังหวัดเชียงใหม่ เรามุ่งเน้นการให้บริการแบบเป็นกันเอง บรรยากาศเงียบสงบ เหมาะสำหรับผู้ที่ต้องการหลีกหนีความวุ่นวายมาสูดอากาศบริสุทธิ์และพักผ่อนอย่างแท้จริง",
    theme: {
      primaryBtn: "bg-emerald-700 hover:bg-emerald-800 text-white",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      heroBg: "bg-emerald-950 text-white",
      cardBorder: "border-emerald-100",
    },
    rooms: [
      {
        name: "Garden View Room",
        description:
          "ห้องพักวิวสวนร่มรื่น ตกแต่งสไตล์ไม้อบอุ่น พร้อมระเบียงส่วนตัวสำหรับนั่งจิบกาแฟชมธรรมชาติตอนเช้า",
        amenities: [
          "เตียง Queen Size",
          "เครื่องปรับอากาศ",
          "เครื่องทำน้ำอุ่น",
          "Wi-Fi ฟรี",
          "ระเบียงส่วนตัว",
        ],
        price: "เริ่มต้น 1,290 บาท/คืน",
        image: natureGarden,
      },
      {
        name: "Balcony Suite",
        description:
          "ห้องสูทขนาดใหญ่พร้อมระเบียงกว้าง รับลมธรรมชาติแบบเต็มๆ พร้อมมุมนั่งเล่นส่วนตัว",
        amenities: [
          "เตียง King Size",
          "มุมนั่งเล่น",
          "อ่างอาบน้ำ",
          "Smart TV",
          "มินิบาร์ฟรี",
        ],
        price: "เริ่มต้น 1,890 บาท/คืน",
        image: natureBalcony,
      },
      {
        name: "Family Cottage",
        description:
          "บ้านพักเป็นหลังสำหรับครอบครัวหรือกลุ่มเพื่อน ร่มรื่นด้วยต้นไม้รอบบ้าน มีลานนั่งเล่นส่วนตัว",
        amenities: [
          "2 ห้องนอน",
          "ลานระเบียงใหญ่",
          "ตู้เย็น",
          "ไมโครเวฟ",
          "รองรับได้ 4-6 ท่าน",
        ],
        price: "เริ่มต้น 2,490 บาท/คืน",
        image: natureFamily,
      },
    ],
    facilities: [
      "Wi-Fi ฟรีทั่วบริเวณ",
      "ที่จอดรถส่วนตัวฟรี",
      "อาหารเช้าแบบไทย-ตะวันตก",
      "สวนส่วนตัวและลานพักผ่อน",
      "ระเบียง/ชานพักชมวิว",
      "บริการน้ำดื่มและกาแฟสด",
    ],
    location: {
      address: "123 หมู่ 5 ต.บ้านสวน อ.เมือง จ.เชียงใหม่ 50000",
      directions:
        "เดินทางจากตัวเมืองเชียงใหม่ประมาณ 25 นาที ตามเส้นทางหลวงหมายเลข 107 มีป้ายบอกทางชัดเจนตลอดทาง",
      mapUrl: "https://maps.google.com/?q=Chiang+Mai",
    },
    contact: {
      phone: "0812345678",
      phoneDisplay: "081-234-5678",
      lineId: "baansuannature",
      lineUrl: "https://line.me/ti/p/~baansuannature",
    },
    gallery: [natureHero, naturePool, natureLodge, natureResort],
  },
  "x-template-next-012": {
    id: "12",
    name: "City Inn Minimal",
    slug: "x-template-next-012",
    category: "Accommodation / City Center",
    tagline: "ความเรียบง่าย สะอาด ปลอดภัย ใจกลางเมือง",
    about:
      "City Inn Minimal นำเสนอประสบการณ์การพักผ่อนแบบมินิมอลในย่านใจกลางเมือง เน้นความสะอาด ดีไซน์เรียบหรู คมชัด และความสะดวกสบายในการเดินทาง ตอบโจทย์ทั้งนักท่องเที่ยวและผู้เดินทางมาติดต่อธุรกิจ",
    theme: {
      primaryBtn: "bg-slate-900 hover:bg-slate-800 text-white",
      badge: "bg-slate-100 text-slate-800 border-slate-300",
      heroBg: "bg-slate-900 text-white",
      cardBorder: "border-slate-200",
    },
    rooms: [
      {
        name: "Standard Cozy Room",
        description:
          "ห้องพักขนาดพอเหมาะ ตกแต่งโทนสีสว่าง พร้อมโต๊ะทำงานและสิ่งอำนวยความสะดวกครบครัน",
        amenities: [
          "เตียง Queen Size",
          "แอร์",
          "เครื่องทำน้ำอุ่น",
          "Smart TV",
          "Wi-Fi ความเร็วสูง",
        ],
        price: "เริ่มต้น 990 บาท/คืน",
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Deluxe City View",
        description:
          "ห้องพักมุมเมืองพร้อมกระจกบานใหญ่ ชมทัศนียภาพย่านธุรกิจยามค่ำคืนได้อย่างชัดเจน",
        amenities: [
          "เตียง King Size",
          "วิวเมือง",
          "แอร์",
          "เครื่องทำน้ำอุ่น",
          "Smart TV",
          "มุมกาแฟสด",
        ],
        price: "เริ่มต้น 1,490 บาท/คืน",
        image:
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Executive Minimal Suite",
        description:
          "ห้องสูทสไตล์มินิมอล แยกโซนพักผ่อนและโซนทำงาน เหมาะกับการเข้าพักระยะยาว",
        amenities: [
          "เตียง King Size",
          "โซนทำงานแยก",
          "โซฟา",
          "แอร์",
          "Smart TV 55 นิ้ว",
          "ตู้เย็นใหญ่",
        ],
        price: "เริ่มต้น 2,190 บาท/คืน",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      },
    ],
    facilities: [
      "Wi-Fi ความเร็วสูงทั่วบริเวณ",
      "ระบบ Keycard และรักษาความปลอดภัย 24 ชม.",
      "มุมกาแฟ self-service บริเวณล็อบบี้",
      "พื้นที่ Co-working Space เงียบสงบ",
      "ที่จอดรถในร่ม",
      "บริการฝากกระเป๋าเดินทางฟรี",
    ],
    location: {
      address:
        "456 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110",
      directions:
        "ตั้งอยู่ใกล้สถานีรถไฟฟ้า BTS ใช้เวลาเดินเพียง 3 นาทีจากสถานี ทางเข้าสะดวก ปลอดภัย",
      mapUrl: "https://maps.google.com/?q=Bangkok",
    },
    contact: {
      phone: "029876543",
      phoneDisplay: "02-987-6543",
      lineId: "cityinnminimal",
      lineUrl: "https://line.me/R/ti/p/~cityinnminimal",
    },
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
    ],
  },
} satisfies Record<TemplateSlug, LodgingTemplate>;

function App() {
  const [selectedSlug, setSelectedSlug] =
    useState<TemplateSlug>("x-template-next-011");
  const template = templatesData[selectedSlug];
  const isNature = selectedSlug === "x-template-next-011";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <div className="sticky top-0 z-50 bg-slate-900 px-4 py-2.5 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400">Micro-Gallery Demo:</span>
            <span>เลือกดูสไตล์เว็บไซต์ที่พัก</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedSlug("x-template-next-011")}
              aria-pressed={isNature}
              className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                isNature
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              🏡 Baan Suan Lodge (x-template-next-011)
            </button>
            <button
              type="button"
              onClick={() => setSelectedSlug("x-template-next-012")}
              aria-pressed={!isNature}
              className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                !isNature
                  ? "bg-slate-700 text-white shadow-xs ring-1 ring-slate-500"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              🏙️ City Inn Minimal (x-template-next-012)
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-[45px] z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight sm:text-xl">
            <span
              className={`size-3.5 rounded-full ${
                isNature ? "bg-emerald-600" : "bg-slate-900"
              }`}
            />
            {template.name}
          </div>
          <nav
            aria-label="เมนูหลัก"
            className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex"
          >
            <a href="#about" className="transition-colors hover:text-slate-900">
              เกี่ยวกับเรา
            </a>
            <a href="#rooms" className="transition-colors hover:text-slate-900">
              ห้องพัก
            </a>
            <a
              href="#facilities"
              className="transition-colors hover:text-slate-900"
            >
              สิ่งอำนวยความสะดวก
            </a>
            <a
              href="#gallery"
              className="transition-colors hover:text-slate-900"
            >
              บรรยากาศ
            </a>
            <a
              href="#location"
              className="transition-colors hover:text-slate-900"
            >
              ที่ตั้ง
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-slate-900"
            >
              ติดต่อ
            </a>
          </nav>
          <a
            href="#contact"
            className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-xs transition-all ${template.theme.primaryBtn}`}
          >
            สอบถามที่พัก
          </a>
        </div>
      </header>

      <main>
        <section
          className={`relative overflow-hidden py-24 sm:py-32 ${template.theme.heroBg}`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url('${template.gallery[0]}')` }}
          />
          <div className="relative mx-auto max-w-5xl space-y-6 px-4 text-center">
            <span
              className={`inline-block rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${template.theme.badge}`}
            >
              {template.category}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              {template.name}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light opacity-90 sm:text-2xl">
              "{template.tagline}"
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#rooms"
                className="rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-md transition-all hover:bg-slate-100"
              >
                ดูห้องพักทั้งหมด
              </a>
              <a
                href="#contact"
                className={`rounded-xl border border-white/30 px-6 py-3 font-bold transition-all ${template.theme.primaryBtn}`}
              >
                สอบถามห้องว่าง
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-b border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-4xl space-y-4 px-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">เกี่ยวกับที่พัก</h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {template.about}
            </p>
          </div>
        </section>

        <section
          id="rooms"
          className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-14 space-y-2 text-center">
            <h2 className="text-3xl font-bold">ประเภทห้องพัก</h2>
            <p className="text-slate-500">
              เลือกห้องพักที่เหมาะกับสไตล์การเดินทางของคุณ
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {template.rooms.map((room) => (
              <article
                key={room.name}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md ${template.theme.cardBorder}`}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-grow flex-col space-y-4 p-6">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-slate-600">
                    {room.description}
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      สิ่งอำนวยความสะดวก
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-base font-bold text-slate-900">
                      {room.price}
                    </span>
                    <a
                      href="#contact"
                      className={`rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${template.theme.primaryBtn}`}
                    >
                      สอบถามห้องนี้
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="facilities"
          className="border-y border-slate-200 bg-slate-100/70 py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-3xl font-bold">สิ่งอำนวยความสะดวก</h2>
              <p className="text-slate-500">
                พร้อมบริการครบครันเพื่อความสบายตลอดการเข้าพัก
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {template.facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex flex-col items-center justify-center space-y-3 rounded-xl border border-slate-200 bg-white p-5 text-center shadow-xs"
                >
                  <div
                    aria-hidden="true"
                    className={`flex size-10 items-center justify-center rounded-full text-lg font-bold ${
                      isNature
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold">บรรยากาศและแกลเลอรี</h2>
            <p className="text-slate-500">
              สัมผัสบรรยากาศโดยรอบก่อนการเดินทางจริง
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {template.gallery.map((image, index) => (
              <div
                key={image}
                className="group relative h-64 overflow-hidden rounded-xl border border-slate-200 shadow-xs"
              >
                <img
                  src={image}
                  alt={`${template.name} - ภาพบรรยากาศ ${index + 1}`}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="location"
          className="border-t border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
            <h2 className="text-3xl font-bold">ที่ตั้งและการเดินทาง</h2>
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left sm:p-8">
              <div>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  ที่อยู่
                </h3>
                <p className="text-base font-semibold text-slate-800">
                  {template.location.address}
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  การเดินทาง
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {template.location.directions}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={template.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  📍 เปิดดูแผนที่ใน Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-4xl space-y-6 px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold">สอบถามข้อมูลและสำรองห้องพัก</h2>
          <p className="text-sm text-slate-500 sm:text-base">
            * เว็บไซต์นี้ไม่ใช่ระบบจองออนไลน์อัตโนมัติ
            คุณสามารถสอบถามห้องพักว่างและรายละเอียดได้โดยตรงกับเจ้าหน้าที่
          </p>
          <div
            className={`mx-auto max-w-xl space-y-6 rounded-3xl border p-8 shadow-xs ${
              isNature
                ? "border-emerald-200 bg-emerald-50/60"
                : "border-slate-300 bg-slate-100/70"
            }`}
          >
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                เบอร์โทรศัพท์ติดต่อ
              </span>
              <div className="text-3xl font-extrabold text-slate-900">
                {template.contact.phoneDisplay}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <a
                href={`tel:${template.contact.phone}`}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold shadow-xs transition-all sm:w-auto ${template.theme.primaryBtn}`}
              >
                📞 โทรออกทันที
              </a>
              <a
                href={template.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#06C755] px-6 py-3.5 font-bold text-white shadow-xs transition-all hover:bg-[#05b34c] sm:w-auto"
              >
                💬 แอด LINE ({template.contact.lineId})
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-slate-800 bg-slate-900 px-4 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} {template.name} - Micro-Gallery
          Accommodation Template.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          พัฒนาด้วย Vite, React, TypeScript และ Tailwind CSS v4
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Powered by{" "}
          <a
            href="https://microtronic.biz/"
            className="underline underline-offset-2 hover:text-white"
          >
            Microtronic © 2026 Microtronic Co., Ltd.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
