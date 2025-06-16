# TailWind CSS - Practice ❤️

[Next.js](https://nextjs.org)와 함께하는 테일윈드 css 연습❤️

[shadcn ui](https://ui.shadcn.com/)과 [magic ui](https://magicui.design/)도 같이 연습합니다🔥

## 시작하기

터미널:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 테일윈드 4.1 버전 설치하기

https://tailwindcss.com/docs/installation/framework-guides/nextjs

1. next를 이용해서 프로젝트 설치하기

```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

2. 4.1버전의 테일윈드 설치하기

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

3. mjs 세팅하기

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

4. 글로벌에 세팅하기

```css
@import "tailwindcss";
```

5. 예시

```tsx
// page.tsx
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <p>hello tailwind CSS!</p>
    </>
  );
}
```

## shadcn UI 설치하기

https://ui.shadcn.com/docs/installation/next

> magic ui를 쓸려면 shadcn ui를 설치해야 합니다. 참고하세요!

1. 설치

```bash
npx shadcn@latest init
```

2. 해당 컴포넌트를 add하기

```
// 예시 - 버튼 추가
npx shadcn@latest add button
```

3. ex)

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

## magic UI 설치하기

https://magicui.design/docs/installation

먼저 shadcn ui를 설치한 이후...

### 글로벌하게 magic uif 적용하기

```bash
npx shadcn@latest add "https://magicui.design/r/globe.json"
```

이후 자신이 적용하고 싶은 컴포넌트에 가서 CLI를 설치하고 사용하기
