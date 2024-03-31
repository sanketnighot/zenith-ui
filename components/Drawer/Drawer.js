import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed 2xl:hidden z-[13] top-0 right-0 w-[400px] transform ease-in-out " +
        (isOpen
          ? " transition-opacity  duration-500 translate-x-0  "
          : " transition-all delay-500  translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-sm right-0 absolute delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-sm flex flex-col space-y-6  h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
