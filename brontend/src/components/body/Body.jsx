import { useEffect } from 'react';
import './Body.scss';

const Body = () => {
    const handleClick = (event) => {
        console.log("hello", event.offsetX, event.offsetX)
    
        var x = event.nativeEvent.offsetX + 40;
        var y = event.nativeEvent.offsetY - 6 ;

        // Create a new div element
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.backgroundColor = 'red';
        div.style.borderRadius = '50%';
        div.style.top = y + 'px';
        div.style.left = x + 'px';

        // Add the div to the body
        document.querySelector('#containercontainercontainer').appendChild(div);
    }
    useEffect(() => {
        const handle = () => {
            function getGroupId(el) {
                const group = el.closest('g[id]');
                return group ? group.id.toLowerCase() : null;
            }

            function toggleHoverState(id, add) {
                const label = document.querySelector(`label[for=${id}]`);
                if (label) {
                    if (label.classList.includes("click")) {
                        console.log(123)
                        label.classList.toggle("click", add);
                    } else {
                        label.classList.toggle("hover", add);

                    }

                }
            }

            function toggleInputCheckedState(id) {
                const input = document.getElementById(id);
                if (input) {
                    input.checked = !input.checked;
                }
            }

            document.querySelectorAll(".muscle-groups svg g[id]").forEach(function (group) {
                group.addEventListener('mouseover', function (event) {
                    const id = getGroupId(event.target);
                    if (id) toggleHoverState(id, true);
                });

                group.addEventListener('mouseout', function (event) {
                    const id = getGroupId(event.target);
                    if (id) toggleHoverState(id, false);
                });


                group.addEventListener('click', function (event) {
                    const id = getGroupId(event.target);
                    if (id) toggleHoverState(id);
                });
            });
            document.querySelector('.muscle-svg').addEventListener('click', handleClick);
        }
        document.addEventListener('DOMContentLoaded', handle)
        return () => {
            document.removeEventListener('DOMContentLoaded', handle)

        }
    }, [])
    return (
        <main>
            <div id='containercontainercontainer' className="muscle-groups h-[400px] w-fit " onClick={handleClick}>
                <svg className="muscle-svg pr-11 pt-4" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4" clipRule="evenodd" viewBox="0 0 176 207">


                    <path id="Artboard1" fill="none" d="M0 0h176v207H0z" />
                    <g id="Back-Muscles">
                        <g>
                            <g id="Trapezius">
                                <g>
                                    <path fill="#262626" d="m130 76 1-2 2 2c0-2 2-7 4-9l4-8c1-1 0-12 2-16 3-4 4-3 6-4 0-1-14-2-15-11v-4c0-2-7-2-8-1 0 3 5 12-13 14-1 1 4 2 7 7l2 16 8 16Z" />
                                </g>
                            </g>
                            <g id="Lats" fill="#404040">
                                <path d="m134 76 6 8c0 3 0 8 3 8v-4c5-7 5-16 5-16l1-13s-4 1-7-1c0 0 0 5-3 7-1 2-6 8-5 11Zm-6 0-6 8c0 3 0 8-3 8v-4c-5-7-5-16-5-16l-1-13s4 1 7-1c0 0 0 5 3 7 1 2 6 8 5 11Z" />
                            </g>
                            <g id="Triceps" fill="#333">
                                <path d="M149 49s4-2 5-1c2 0 4 5 4 7l2 18-2 2-2-5-1 4c-1 1-4-1-4-1l-2-6s2-14 0-18Zm-36 0s-4-2-5-1c-2 0-4 5-4 7a914 914 0 0 0 0 20l2-5 1 4c1 1 4-1 4-1l2-6s-2-14 0-18Z" />
                            </g>
                            <g id="Forearms" fill="#595959">
                                <path d="M160 73s4 6 4 11c1 4 0 13 2 15s-6 4-6 2-10-18-9-20v-8l3 2s1 3-1 4c-1 1 1 3 2 2l3-3c2-1-1-3 0-3l2-2Zm-58 0-4 11c-1 4 0 13-2 15s6 4 6 2c1-2 10-18 9-20v-8l-3 2s-1 3 1 4c1 1-1 3-2 2l-3-3v-3l-2-2Z" />
                            </g>
                            <g id="Glutes" fill="#1a1a1a">
                                <path d="M116 90c1 0 14 6 15 16 0 10-7 13-14 12-6-2-6-10-6-12l3-11 2-5Z" />
                                <path d="M147 91s-13 4-16 13c-2 10 4 15 11 14 6 0 7-8 7-10V97l-2-6Z" />
                            </g>
                            <g id="Hamstrings" fill="#333">
                                <path d="M134 119s12 0 14-2c2-1 3 10 0 22-2 12-1 13-1 13-3-2-4-8-5-8 0 0-5 8-4 14l-6-32c-1-4-2-7 2-7Zm-6 0s-12 0-14-2c-2-1-3 10 0 22 2 12 1 13 1 13 3-2 4-8 5-8 0 0 5 8 4 14l6-32c1-4 0-7-2-7Z" />
                            </g>
                            <g id="Calves" fill="#4d4d4d">
                                <path d="M143 152s-6 7-6 10v20c1 2 5-4 6-8 1-3 0 4 2 6 1 1 5-14 4-18l-2-12c1-4-3 2-3 5-1 2-1-3-1-3Zm-24 0s6 7 6 10v20c-1 2-5-4-6-8-1-3 0 4-2 6-1 1-5-14-4-18 2-7 3-9 2-12 0-4 3 2 3 5 1 2 1-3 1-3Z" />
                            </g>
                        </g>
                    </g>
                    <g id="Front-Muscles">
                        <g id="Deltoids" fill="#333">
                            <path d="M36 38s-13-7-18 4c-2 4 0 16 0 16 0 1 3-8 7-9 0-1-1-9 11-11Zm16 0s13-7 18 4c2 4 0 16 0 16 0 1-3-8-6-9-1-1 0-9-12-11Z" />
                        </g>
                        <g id="Biceps" fill="#404040">
                            <path d="M25 49v17l-2 10-2-2-3 2s-5-17 7-27Zm39 2s-2 17 0 18l2 9 2-2 2 2c1 1 6-17-6-27Z" />
                        </g>
                        <g id="Pectorals" fill="#595959">
                            <path d="m42 40 2 12c0 4 0 7-7 8-6 1-7-2-9-3l-3-9c-1-1 4-9 11-9l6 1Zm4 0-2 12c0 4 0 7 8 8 5 1 7-2 8-3 2-1 2-8 3-9s-4-9-11-9l-6 1Z" />
                        </g>
                        <g id="Obliques" fill="#262626">
                            <path d="M36 63v33c-1 1-2-7-7-7-1-1 0-18-2-22-3-4 8-5 9-4Zm16 0v33c1 1 2-7 7-7 1-1 0-18 2-22s-8-5-9-4Z" />
                        </g>
                        <g id="Abs">
                            <path fill="#595959" d="M44 60s-6-2-8 2c-3 3 0 16 0 21-1 5 3 25 5 25h3c2 0 8-14 8-25 1-6 5-22-3-23h-5Z" />
                        </g>
                        <g id="Quads" fill="#333">
                            <path d="M32 96s11 24 10 35l-2 17c0 3 0-4-3-4-5 0-8 3-9 7l-1-10-2-14c-2-15 10-21 7-31m24 0s-11 24-10 35l2 17c0 3 0-4 3-4 4 0 7 3 9 7l1-10 2-14c1-15-10-21-7-31" />
                        </g>
                        <g id="Adductors" fill="#4d4d4d">
                            <path d="M35 94a218 218 0 0 0 9 24l-1 9-9-31 1-2Z" />
                            <path d="m53 94-6 15c-2 4-4 8-3 9l1 9c0-6 7-30 9-31l-1-2Z" />
                        </g>
                    </g>
                    <path id="Front" fill="none" stroke="#000" strokeWidth="1" d="m44 118 4 30c1 3 3 9 2 12l-1 13c1 2 2 10 0 14l-2 10c-3 8-1 8-1 8h7l3-1h1c3 0-1-8-1-8-1-7 1-11 1-11 6-18 6-22 4-29l-1-3 1-13c2-6 3-21 4-28 1-9-4-22-4-22-1-5 1-23 1-23 2 3 2 10 2 10 0 7 5 17 5 17 3 4 4 8 4 9v10c0 7 1 6 1 6l2-5v7c1 2 2-1 2-1 0-9 1-6 1-6 0 7 1 8 2 8v-9l3 6c2 1 1-3 0-4l-2-7 4 5c2-1-2-7-4-10l-3-5-1-9-3-11c-3-5-3-15-3-15l-1-16c-1-11-9-11-9-11-8-1-9-4-9-4-2-3-1-8-1-8l2-4c2-2 2-5 1-4l-1-1c2-12-9-13-9-13h-2s-11 1-9 13l-1 1c-1-1-1 2 1 4l2 4v8s-2 3-10 4c0 0-8 0-9 11v16s-1 10-4 15c0 0-2 4-2 11l-2 9-3 5c-2 3-6 9-4 10 0 0 2 0 4-5l-2 7c0 1-2 5 0 4 0 0 2-1 3-6v9c1 0 2-1 2-8 0 0 1-3 1 6 0 0 1 3 2 1v-7l2 5s1 1 1-6v-10c0-1 1-5 4-9 0 0 6-10 5-17 0 0 0-7 2-10 0 0 2 18 1 23 0 0-5 13-4 22 1 7 2 22 4 28l1 13v3c-3 7-2 11 3 29 0 0 2 4 1 11 0 0-3 8-1 8h1l3 1h7s2 0-1-8l-2-10c-2-4-1-12 0-14l-1-13c-1-3 1-9 2-12l4-30Z" />
                    <path id="Back" fill="none" stroke="#000" strokeWidth="1" d="m131 118 4 30c1 3 3 9 2 12l-1 13c1 2 2 10 0 14l-2 10c-3 8-1 8-1 8h7l3-1h1c2 0-1-8-1-8-1-7 1-11 1-11 6-18 6-22 3-29v-3l1-13c2-6 3-21 4-28 1-9-4-22-4-22-1-5 1-23 1-23 2 3 2 10 2 10 0 7 5 17 5 17 3 4 4 8 4 9v10c0 7 1 6 1 6l2-5v7c1 2 2-1 2-1 0-9 1-6 1-6 0 7 1 8 2 8v-9c1 5 3 6 3 6 2 1 0-3 0-4l-2-7 4 5c2-1-2-7-4-10l-3-5-2-9c0-7-2-11-2-11-3-5-4-15-4-15V47c-1-11-9-11-9-11-8-1-10-4-10-4v-8l2-4c2-2 2-5 1-4l-1-1c2-12-9-13-9-13h-2s-11 1-9 13l-1 1c-1-1-1 2 1 4l2 4v8s-2 3-10 4c0 0-8 0-9 11l-1 16s0 10-3 15l-3 11-1 9-3 5c-2 3-6 9-4 10l4-5-2 7c-1 1-2 5 0 4l3-6v9c1 0 2-1 2-8 0 0 1-3 1 6 0 0 1 3 2 1v-7l2 5s1 1 1-6v-10c0-1 1-5 4-9 0 0 5-10 5-17 0 0 0-7 2-10 0 0 2 18 1 23 0 0-5 13-4 22 1 7 2 22 4 28l1 13-1 3c-2 7-2 11 4 29 0 0 2 4 1 11 0 0-4 8-1 8h1l3 1h7s2 0-1-8l-2-10c-2-4-1-12 0-14l-1-13c-1-3 1-9 2-12l4-30Z" />
                </svg>
            </div>
        </main>
    )

}

export default Body