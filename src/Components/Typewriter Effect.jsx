import { TypewriterEffect } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const style = "font-mono text-4xl font-semibold text-white dark:text-gray-950"
    const words = [
        {
            text: "Halo!,",
            className: style,
        },
        {
            text: "Saya",
            className: style,
        },
        {
            text: "Tsaqif",
            className: style,
        },
        {
            text: "Seorang",
            className: style,
        },
        {
            text: "Mahasiswa",
            className: style,
        }, {
            text: "Yang",
            className: style,
        },
        {
            text: "Berfokus",
            className: style,
        },
        {
            text: "Pada",
            className: style,
          },
          {
            text: "Bidang",
            className: style,

          },
          {
            text: "IT",
            className: style,
          }
    ];
    return (
        (< >
            <TypewriterEffect words={words.map((item)=>{
                item.text.toUpperCase()
                item.text = item.text.toUpperCase()
                return item
            })} />
        </>)
    );
}
