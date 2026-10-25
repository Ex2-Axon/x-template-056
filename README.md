# Micro-Gallery Lodging Showcase

ตัวอย่างเว็บไซต์ที่พักแบบหน้าเดียวสำหรับสาธิตเทมเพลต 2 สไตล์: **Baan Suan Lodge** และ **City Inn Minimal** ผู้ใช้สลับรูปแบบได้จากแถบด้านบน โดยเนื้อหาห้องพัก แกลเลอรี ที่อยู่ และข้อมูลติดต่อจะเปลี่ยนตามแบบที่เลือก

## เทคโนโลยี

- Vite 8
- React 19
- TypeScript 7
- Tailwind CSS 4

Vite 8 ต้องใช้ Node.js `^20.19.0` หรือ `>=22.12.0`

## เริ่มต้นใช้งาน

ติดตั้ง dependencies ด้วย pnpm:

```bash
pnpm install
```

เริ่มเซิร์ฟเวอร์สำหรับพัฒนา:

```bash
pnpm dev
```

เปิด URL ที่ Vite แสดงใน terminal (ค่าเริ่มต้นคือ `http://localhost:5173/`) หากแก้การตั้งค่า Vite ขณะที่เซิร์ฟเวอร์กำลังทำงาน ให้หยุดแล้วเริ่ม `pnpm dev` ใหม่

## คำสั่งที่ใช้ได้

| คำสั่ง | รายละเอียด |
| --- | --- |
| `pnpm dev` | เริ่ม Vite development server |
| `pnpm typecheck` | ตรวจชนิดข้อมูล TypeScript |
| `pnpm build` | ตรวจ TypeScript และสร้าง production build ใน `dist/` |
| `pnpm preview` | เปิดดู production build ในเครื่อง |

## โครงสร้างโปรเจกต์

```text
.
├── _html/              # HTML ต้นฉบับ เก็บไว้โดยไม่แก้ไขและไม่ใช้เป็น entry point
├── images/             # ภาพถ่ายที่ใช้กับ Baan Suan Lodge
├── src/
│   ├── App.tsx          # หน้าเว็บ ข้อมูลที่พัก และตัวเลือกสลับเทมเพลต
│   ├── index.css        # Tailwind CSS และฟอนต์
│   └── main.tsx         # จุดเริ่มต้น React
├── index.html           # HTML entry point ของ Vite
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

ภาพใน `images/` ถูก import จาก TypeScript โดยตรง เพื่อให้ Vite รวมและจัดการไฟล์ภาพใน production build ส่วนรูปภาพของเทมเพลต City Inn Minimal อ้างอิงจาก Unsplash

## การตั้งค่า file watcher

Vite ตั้งค่าให้ใช้ polling ทุก 1 วินาทีเพื่อหลีกเลี่ยงข้อผิดพลาด `ENOSPC` เมื่อระบบมี file watcher ไม่เพียงพอ และไม่เฝ้าดู `node_modules/`, `dist/` และ `_html/` การใช้ polling อาจเพิ่มการใช้ CPU เล็กน้อย

## Production build

```bash
pnpm build
pnpm preview
```

ไฟล์ที่พร้อม deploy จะอยู่ใน `dist/`

## Footer

เว็บไซต์แสดงข้อความและลิงก์ `Powered by Microtronic © 2026 Microtronic Co., Ltd.` ไปยัง <https://microtronic.biz/>
