"use strict";

let SM_WIDTH = 640, MD_WIDTH = 960, LG_WIDTH = 1600;
function autopictag(options) {
    if (options !== void 0) {
        SM_WIDTH =
            options.smWidth !== void 0
                ? typeof options.smWidth === "string"
                    ? Number(options.smWidth)
                    : options.smWidth
                : SM_WIDTH;
        MD_WIDTH =
            options.mdWidth !== void 0
                ? typeof options.mdWidth === "string"
                    ? Number(options.mdWidth)
                    : options.mdWidth
                : MD_WIDTH;
        LG_WIDTH =
            options.lgWidth !== void 0
                ? typeof options.lgWidth === "string"
                    ? Number(options.lgWidth)
                    : options.lgWidth
                : LG_WIDTH;
    }
    const imageTagsQuery = document.getElementsByTagName("img");
    for (const img of imageTagsQuery) {
        const creactPictureDom = document.createElement("picture");
        wrap(img, creactPictureDom);
        let imgSrc = img.src;
        const imgMapSrc = new Map([
            [`(min-width: ${LG_WIDTH}px)`, imgSrc.replace("img/lg", "img/xl")],
            [`(min-width: ${MD_WIDTH}px)`, imgSrc],
            [`(min-width: ${SM_WIDTH}px)`, imgSrc.replace("img/lg", "img/md")],
            [`(min-width: 0px)`, imgSrc.replace("img/lg", "img/sm")]
        ]);
        for (const [key, val] of imgMapSrc) {
            let createSourceDom = document.createElement("source");
            createSourceDom.media = key;
            createSourceDom.srcset = val;
            insertBefore(createSourceDom, img);
        }
    }
}
function wrap(element, wrapper) {
    insertBefore(wrapper, element);
    wrapper.appendChild(element);
}
function insertBefore(addElement, element) {
    element.parentNode.insertBefore(addElement, element);
}
