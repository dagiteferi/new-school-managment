{
    const e=window.matchMedia
    (
        "(prefers-color-scheme:dark)"
        ),
        t=()=>{
            $$
            (".js-site-favicon")
            .forEach
            (
                t=>{
                    t.href=t.href.replace
                    (/-dark/,"")
                    .replace(/(\.\w+)$/,
                    (e.matches?"-dark":"")+"$1")
                }
            )
            ,localStorage.getItem
            ("darkmode")
            ||document.body.classList[
                e.matches?"add":"remove"
            ]
            ("dark-theme")
        };
        e.addListener(t),t();
        const n=$$(
            "input[name=toggle-darkmode]"
            ),
            s=()=>{
                const e=document.body.classList.toggle
                ("dark-theme");
                n.forEach(
                    t=>t.checked=e
                    ),localStorage.setItem
                    ("darkmode",e)
                };
                localStorage.getItem
                ("darkmode")==="true"&&!
                document.body.classList.contains
                ("dark-theme")&&s(),n.forEach
                (e=>e.onchange=s)}$
                ("nav button")
                .onclick=()=>$("nav")
                .classList.toggle
                ("show-menu")