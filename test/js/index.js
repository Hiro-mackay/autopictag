"use strict";
let SM_WIDTH = 640,
    MD_WIDTH = 960,
    LG_WIDTH = 1440,
    XL_WIDTH = 1600;

function autopictag(options) {
    if (options !== void 0) {
        SM_WIDTH =
            options.smWidth !== void 0 ?
            typeof options.smWidth === "string" ?
            Number(options.smWidth) :
            SM_WIDTH :
            SM_WIDTH;
        MD_WIDTH =
            options.mdWidth !== void 0 ?
            typeof options.mdWidth === "string" ?
            Number(options.mdWidth) :
            MD_WIDTH :
            MD_WIDTH;
        LG_WIDTH =
            options.lgWidth !== void 0 ?
            typeof options.lgWidth === "string" ?
            Number(options.lgWidth) :
            LG_WIDTH :
            LG_WIDTH;
        XL_WIDTH =
            options.xlWidth !== void 0 ?
            typeof options.xlWidth === "string" ?
            Number(options.xlWidth) :
            XL_WIDTH :
            XL_WIDTH;
    }
    const imageTagsQuery = document.getElementsByTagName("img");
    for (const img of imageTagsQuery) {
        const creactPictureDom = document.createElement("picture");
        wrap(img, creactPictureDom);
        let imgSrc = img.src;
        const imgMapSrc = new Map([
            ["(min-width: 1500px)", imgSrc.replace("img/lg", "img/xl")],
            ["(min-width: 960px)", imgSrc],
            ["(min-width: 640px)", imgSrc.replace("img/lg", "img/md")],
            ["(min-width: 0px)", imgSrc.replace("img/lg", "img/sm")]
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
