const _0x30f78b = _0xd7cc;
(function (_0x1812a3, _0x4db215) {
    const _0x2bacc4 = _0xd7cc;
    const _0x30456c = _0x1812a3();
    while (!![]) {
        try {
            const _0x194cc4 = -parseInt(_0x2bacc4(0x96)) / 0x1 + parseInt(_0x2bacc4(0x7f)) / 0x2 + parseInt(_0x2bacc4(0x9b)) / 0x3 + parseInt(_0x2bacc4(0x73)) / 0x4 + parseInt(_0x2bacc4(0x7e)) / 0x5 * (parseInt(_0x2bacc4(0x76)) / 0x6) + -parseInt(_0x2bacc4(0x70)) / 0x7 * (-parseInt(_0x2bacc4(0x93)) / 0x8) + -parseInt(_0x2bacc4(0xa1)) / 0x9;
            if (_0x194cc4 === _0x4db215) {
                break;
            } else {
                _0x30456c['push'](_0x30456c['shift']());
            }
        } catch (_0x120ce7) {
            _0x30456c['push'](_0x30456c['shift']());
        }
    }
}(_0x5383, 0x79c77));
const open_menu__ = document[_0x30f78b(0x8f)](_0x30f78b(0x8b));
const menu____ = document[_0x30f78b(0x8f)](_0x30f78b(0x9a));
const meu_titulo = document[_0x30f78b(0x8f)]('h1');
const lugar_para_flex = document[_0x30f78b(0x8f)](_0x30f78b(0x9a));
const abrir_tabs = document['createElement'](_0x30f78b(0x9a));
const tabs_abertas = document['createElement'](_0x30f78b(0x9a));
let body_ = document[_0x30f78b(0x82)](_0x30f78b(0x92));
let opened = !![];
let older_menu_opened = ![];
let font_family = 'Arial,\x20Helvetica,\x20sans-serif';
open_menu__[_0x30f78b(0xbc)]('mouseenter', () => {
    const _0x36faee = _0x30f78b;
    open_menu__[_0x36faee(0xb8)][_0x36faee(0x8d)] = 'scale(1.1)';
});
open_menu__[_0x30f78b(0xbc)]('mouseleave', () => {
    const _0x1edbee = _0x30f78b;
    open_menu__[_0x1edbee(0xb8)][_0x1edbee(0x8d)] = 'scale(1)';
});
wait = async _0x54fbb9 => {
    return new Promise(_0x42aad6 => {
        setTimeout(_0x42aad6, _0x54fbb9);
    });
};
mostrar = async _0x108cd3 => {
    const _0x2f0519 = _0x30f78b;
    if (_0x108cd3 == !![]) {
        menu____[_0x2f0519(0xb8)][_0x2f0519(0x80)] = _0x2f0519(0x6b);
        await wait(0xa);
        menu____['style'][_0x2f0519(0x75)] = '1';
    } else {
        menu____['style'][_0x2f0519(0x75)] = '0';
        setTimeout(() => {
            const _0xc2488b = _0x2f0519;
            menu____[_0xc2488b(0xb8)]['display'] = 'none';
        }, 0x12c);
    }
};
open_menu__[_0x30f78b(0xbc)](_0x30f78b(0xa8), () => {
    const _0x4a3819 = _0x30f78b;
    if (menu____[_0x4a3819(0xb8)][_0x4a3819(0x80)] == _0x4a3819(0xa9)) {
        mostrar(!![]);
        older_menu_opened = !![];
    } else {
        mostrar(![]);
        older_menu_opened = ![];
    }
});
document[_0x30f78b(0xbc)](_0x30f78b(0x99), _0x3f5f32 => {
    const _0x50216f = _0x30f78b;
    if (_0x3f5f32[_0x50216f(0xba)]['toLowerCase']() == '\x27') {
        if (opened == !![]) {
            opened = ![];
            open_menu__[_0x50216f(0xb8)][_0x50216f(0x80)] = 'none';
            mostrar(![]);
        } else {
            opened = !![];
            open_menu__[_0x50216f(0xb8)][_0x50216f(0x80)] = 'block';
            if (older_menu_opened == !![]) {
                mostrar(!![]);
            }
        }
    }
});
var moretti = {};
var tabelas = [];
moretti[_0x30f78b(0xb4)] = function (_0x659af0) {
    const _0x230b23 = _0x30f78b;
    const _0x5ee8e0 = document[_0x230b23(0x8f)](_0x230b23(0x8b));
    const _0x3f6d1b = document[_0x230b23(0x8f)]('ul');
    _0x5ee8e0['textContent'] = _0x659af0;
    Object[_0x230b23(0x74)](_0x5ee8e0[_0x230b23(0xb8)], {
        'color': 'white',
        'width': _0x230b23(0xa2),
        'height': _0x230b23(0xb1),
        'border': 'none',
        'font-family': font_family,
        'border-radius': _0x230b23(0x6a),
        'background-color': 'rgb(0,\x200,\x200,\x200.8)',
        'margin-bottom': _0x230b23(0xbf),
        'transition': _0x230b23(0xb2)
    });
    _0x5ee8e0['addEventListener'](_0x230b23(0x85), () => {
        const _0x4e5311 = _0x230b23;
        Object[_0x4e5311(0x74)](_0x5ee8e0['style'], {
            'background-color': _0x4e5311(0x98),
            'transform': _0x4e5311(0xbe)
        });
    });
    _0x5ee8e0[_0x230b23(0xbc)](_0x230b23(0xb0), () => {
        const _0xe414de = _0x230b23;
        Object[_0xe414de(0x74)](_0x5ee8e0[_0xe414de(0xb8)], {
            'background-color': _0xe414de(0x7a),
            'transform': _0xe414de(0x9f)
        });
    });
    Object['assign'](_0x3f6d1b[_0x230b23(0xb8)], {
        'width': _0x230b23(0xa2),
        'height': _0x230b23(0xb3),
        'overflow': 'auto',
        'padding': _0x230b23(0xbf),
        'display': 'none'
    });
    tabelas[_0x230b23(0x81)](_0x3f6d1b);
    abrir_tabs['appendChild'](_0x5ee8e0);
    tabs_abertas[_0x230b23(0x78)](_0x3f6d1b);
    const _0x3f6e01 = {};
    _0x3f6e01[_0x230b23(0x88)] = async (_0x44b009, _0x3414d7) => {
        const _0x1ee72a = _0x230b23;
        const _0x4a5bb3 = document[_0x1ee72a(0x8f)]('li');
        const _0x5f464e = document[_0x1ee72a(0x8f)](_0x1ee72a(0x8b));
        _0x4a5bb3[_0x1ee72a(0x78)](_0x5f464e);
        _0x5f464e[_0x1ee72a(0x94)] = _0x44b009;
        _0x5f464e[_0x1ee72a(0xbc)](_0x1ee72a(0xa8), () => {
            _0x3414d7();
        });
        Object[_0x1ee72a(0x74)](_0x5f464e[_0x1ee72a(0xb8)], {
            'color': _0x1ee72a(0x95),
            'font-family': font_family,
            'width': '100%',
            'height': _0x1ee72a(0xb1),
            'background-color': _0x1ee72a(0xac),
            'border': _0x1ee72a(0xa9),
            'border-radius': _0x1ee72a(0x6a),
            'margin-bottom': _0x1ee72a(0xbf),
            'transform': 'scale(0.95)',
            'transition': _0x1ee72a(0xb2)
        });
        _0x5f464e['addEventListener'](_0x1ee72a(0x85), () => {
            const _0x3fe937 = _0x1ee72a;
            Object[_0x3fe937(0x74)](_0x5f464e[_0x3fe937(0xb8)], {
                'transform': _0x3fe937(0x9f),
                'background-color': _0x3fe937(0xa3)
            });
        });
        _0x5f464e[_0x1ee72a(0xbc)](_0x1ee72a(0xb0), () => {
            const _0x18b6f9 = _0x1ee72a;
            Object[_0x18b6f9(0x74)](_0x5f464e['style'], {
                'transform': _0x18b6f9(0xb6),
                'background-color': _0x18b6f9(0x6f)
            });
        });
        _0x3f6d1b[_0x1ee72a(0x78)](_0x4a5bb3);
    };
    _0x3f6e01['CreateToggle'] = async (_0x2d77b4, _0x34d06e) => {
        const _0x5eeae0 = _0x230b23;
        const _0x1eaef8 = document[_0x5eeae0(0x8f)]('li');
        const _0x3d998f = document[_0x5eeae0(0x8f)](_0x5eeae0(0x8b));
        _0x1eaef8[_0x5eeae0(0x78)](_0x3d998f);
        _0x3d998f['textContent'] = _0x2d77b4;
        _0x3d998f['classList'][_0x5eeae0(0x67)]('desligado');
        _0x3d998f[_0x5eeae0(0xbc)](_0x5eeae0(0xa8), async () => {
            const _0x113a94 = _0x5eeae0;
            if (_0x3d998f['classList'][_0x113a94(0x77)](_0x113a94(0x90))) {
                _0x3d998f[_0x113a94(0xbb)][_0x113a94(0x8e)]('desligado');
                _0x3d998f[_0x113a94(0xbb)][_0x113a94(0x67)](_0x113a94(0x9e));
                _0x3d998f[_0x113a94(0xb8)][_0x113a94(0xb5)] = _0x113a94(0x6e);
                await _0x34d06e(!![]);
            } else if (_0x3d998f[_0x113a94(0xbb)]['contains'](_0x113a94(0x9e))) {
                _0x3d998f[_0x113a94(0xbb)][_0x113a94(0x8e)](_0x113a94(0x9e));
                _0x3d998f[_0x113a94(0xbb)][_0x113a94(0x67)](_0x113a94(0x90));
                _0x3d998f[_0x113a94(0xb8)][_0x113a94(0xb5)] = _0x113a94(0x6c);
                await _0x34d06e(![]);
            }
        });
        Object['assign'](_0x3d998f['style'], {
            'color': _0x5eeae0(0x95),
            'font-family': font_family,
            'width': _0x5eeae0(0xa2),
            'height': _0x5eeae0(0xb1),
            'background-color': _0x5eeae0(0x6c),
            'border': _0x5eeae0(0xa9),
            'border-radius': _0x5eeae0(0x6a),
            'margin-bottom': '5px',
            'transform': 'scale(0.95)',
            'transition': _0x5eeae0(0xb2)
        });
        _0x3d998f[_0x5eeae0(0xbc)](_0x5eeae0(0x85), () => {
            const _0x6151aa = _0x5eeae0;
            Object[_0x6151aa(0x74)](_0x3d998f['style'], { 'transform': _0x6151aa(0x9f) });
        });
        _0x3d998f[_0x5eeae0(0xbc)](_0x5eeae0(0xb0), () => {
            const _0x3c9820 = _0x5eeae0;
            Object[_0x3c9820(0x74)](_0x3d998f[_0x3c9820(0xb8)], { 'transform': _0x3c9820(0xb6) });
        });
        _0x3f6d1b[_0x5eeae0(0x78)](_0x1eaef8);
    };
    _0x5ee8e0[_0x230b23(0xbc)](_0x230b23(0xa8), () => {
        const _0x5f5b9a = _0x230b23;
        for (v of tabelas) {
            v[_0x5f5b9a(0xb8)][_0x5f5b9a(0x80)] = _0x5f5b9a(0xa9);
        }
        _0x3f6d1b['style'][_0x5f5b9a(0x80)] = _0x5f5b9a(0x6b);
    });
    return _0x3f6e01;
};
async function init() {
    const _0x16af53 = _0x30f78b;
    const _0x3d05b7 = await moretti[_0x16af53(0xb4)]('Zoom');
    const _0x5449a5 = await moretti['CreateTab'](_0x16af53(0x72));
    const _0x33f4bf = { 'lgbtopacity': 0.8 };
    _0x3d05b7[_0x16af53(0x87)]('Piruletas', async _0x1d156c => {
        const _0x50d052 = _0x16af53;
        _0x33f4bf[_0x50d052(0x6d)] = !![];
        while (_0x33f4bf[_0x50d052(0x6d)] == !![]) {
            for (var _0x264a81 = 0x0; _0x264a81 <= 0x168; _0x264a81 += 0x5) {
                if (_0x33f4bf['pirueta'] == ![]) {
                    break;
                }
                document[_0x50d052(0x82)](_0x50d052(0x92))[_0x50d052(0xb8)][_0x50d052(0x8d)] = 'rotate(' + _0x264a81 + 'deg)';
                await wait(0x1);
            }
        }
        document[_0x50d052(0x82)](_0x50d052(0x92))[_0x50d052(0xb8)][_0x50d052(0x8d)] = _0x50d052(0xbd) + 0x0 + _0x50d052(0x7c);
    });
    _0x5449a5[_0x16af53(0x87)](_0x16af53(0x8c), async _0x408cc3 => {
        const _0x273088 = _0x16af53;
        _0x33f4bf[_0x273088(0x9c)] = _0x408cc3;
        if (_0x33f4bf['lgbtopacity'] == undefined) {
            _0x33f4bf[_0x273088(0x7d)] = 0.8;
        }
        if (_0x408cc3 == !![]) {
            const _0xb657a3 = document[_0x273088(0x8f)](_0x273088(0x9a));
            Object[_0x273088(0x74)](_0xb657a3[_0x273088(0xb8)], {
                'position': _0x273088(0xab),
                'width': _0x273088(0xa2),
                'height': _0x273088(0xaa),
                'background-color': 'rgba(255,\x200,\x200,\x200.8)',
                'z-index': _0x273088(0xb9),
                'transition': '200ms'
            });
            document[_0x273088(0x82)](_0x273088(0x92))[_0x273088(0x78)](_0xb657a3);
            var _0x5ee79e = [
                [
                    0xff,
                    0x0,
                    0x0
                ],
                [
                    0xff,
                    0xa5,
                    0x0
                ],
                [
                    0xff,
                    0xff,
                    0x0
                ],
                [
                    0x0,
                    0xff,
                    0x0
                ],
                [
                    0x0,
                    0x0,
                    0xff
                ],
                [
                    0x4b,
                    0x0,
                    0x82
                ],
                [
                    0x80,
                    0x0,
                    0x80
                ]
            ];
            while (_0x33f4bf[_0x273088(0x9c)] == !![]) {
                for (var _0x1e6488 = 0x0; _0x1e6488 < _0x5ee79e[_0x273088(0x8a)]; _0x1e6488++) {
                    if (_0x33f4bf[_0x273088(0x9c)] == !![]) {
                        _0xb657a3[_0x273088(0xb8)]['background-color'] = 'rgba(' + _0x5ee79e[_0x1e6488][0x0] + ',\x20' + _0x5ee79e[_0x1e6488][0x1] + ',\x20' + _0x5ee79e[_0x1e6488][0x2] + ',\x20' + _0x33f4bf[_0x273088(0x7d)] + ')';
                        await wait(0x12c);
                    } else {
                        break;
                    }
                }
            }
            document[_0x273088(0x82)](_0x273088(0x92))[_0x273088(0xa0)](_0xb657a3);
        }
    });
    for (var _0x4f1174 = 0x0; _0x4f1174 <= 0x1; _0x4f1174 += 0.1) {
        const _0x3b036a = _0x4f1174;
        _0x5449a5[_0x16af53(0x88)](_0x16af53(0xad) + Number(String(_0x3b036a)['substring'](0x0, 0x3)), function () {
            const _0x30fae3 = _0x16af53;
            _0x33f4bf[_0x30fae3(0x7d)] = Number(String(_0x3b036a)[_0x30fae3(0x71)](0x0, 0x3));
        });
    }
    while (!![]) {
        var _0x4eec26 = document[_0x16af53(0x82)](_0x16af53(0x92))[_0x16af53(0xb8)][_0x16af53(0xa4)];
        console[_0x16af53(0x83)](_0x4eec26);
        await wait(0x64);
    }
}
init();
Object['assign'](open_menu__[_0x30f78b(0xb8)], {
    'padding': '0',
    'width': _0x30f78b(0xae),
    'height': '60px',
    'position': 'fixed',
    'top': '10px',
    'left': '10px',
    'z-index': _0x30f78b(0x89),
    'border': _0x30f78b(0xa9),
    'border-radius': _0x30f78b(0xa6),
    'background-color': _0x30f78b(0x79),
    'color': _0x30f78b(0x95),
    'font-family': _0x30f78b(0xa5),
    'box-shadow': _0x30f78b(0x69),
    'transition': _0x30f78b(0x91)
});
Object[_0x30f78b(0x74)](menu____[_0x30f78b(0xb8)], {
    'width': _0x30f78b(0xb3),
    'height': _0x30f78b(0xb3),
    'background-color': _0x30f78b(0xa3),
    'position': 'fixed',
    'top': _0x30f78b(0x97),
    'right': _0x30f78b(0x97),
    'transform': _0x30f78b(0xb7),
    'display': _0x30f78b(0xa9),
    'opacity': '0',
    'transition': _0x30f78b(0x91),
    'z-index': _0x30f78b(0xa7),
    'padding': _0x30f78b(0xaf),
    'border-radius': _0x30f78b(0x6a)
});
Object[_0x30f78b(0x74)](abrir_tabs[_0x30f78b(0xb8)], {
    'width': '180px',
    'height': _0x30f78b(0xc0),
    'background-color': 'rgba(0,\x200,\x200,\x200.7)',
    'padding': _0x30f78b(0xbf),
    'border-radius': _0x30f78b(0x6a)
});
Object[_0x30f78b(0x74)](tabs_abertas['style'], {
    'width': _0x30f78b(0x86),
    'height': _0x30f78b(0xc0),
    'margin-left': _0x30f78b(0xaf),
    'background-color': _0x30f78b(0x84),
    'border-radius': _0x30f78b(0x6a)
});
function _0xd7cc(_0x3ac4da, _0x26740e) {
    const _0x53839a = _0x5383();
    _0xd7cc = function (_0xd7cc80, _0x1f2b33) {
        _0xd7cc80 = _0xd7cc80 - 0x67;
        let _0xed3e9c = _0x53839a[_0xd7cc80];
        return _0xed3e9c;
    };
    return _0xd7cc(_0x3ac4da, _0x26740e);
}
function _0x5383() {
    const _0x24b14d = [
        'scale(0.95)',
        'translate(50%,\x20-50%)',
        'style',
        '99998',
        'key',
        'classList',
        'addEventListener',
        'rotate(',
        'scale(1.05)',
        '5px',
        '90%',
        'add',
        'MENU\x20DO\x20MORETTI',
        'black\x200px\x200px\x205px',
        '4px',
        'block',
        'rgba(255,\x200,\x200,\x200.8)',
        'pirueta',
        'rgba(0,\x20255,\x200,\x200.8)',
        'rgba(0,0,0,0.5)',
        '94059Kobtsw',
        'substring',
        'Rainbow',
        '2960424sudwHy',
        'assign',
        'opacity',
        '1912290gDTtVh',
        'contains',
        'appendChild',
        'black',
        'rgb(0,\x200,\x200,\x200.8)',
        'flex',
        'deg)',
        'lgbtopacity',
        '5GNtUrj',
        '1416648FeCoqg',
        'display',
        'push',
        'querySelector',
        'log',
        'rgba(0,\x200,\x200,\x200.7)',
        'mouseenter',
        '290px',
        'CreateToggle',
        'CreateButton',
        '999999',
        'length',
        'button',
        'Enabled',
        'transform',
        'remove',
        'createElement',
        'desligado',
        '300ms\x20ease-in-out',
        'body',
        '320WBTqEp',
        'textContent',
        'white',
        '333493tznROX',
        '50%',
        'rgb(2,\x202,\x202,\x200.8)',
        'keydown',
        'div',
        '1681845rWSglA',
        'lgbt',
        'MUCA',
        'ligado',
        'scale(1)',
        'removeChild',
        '18296460OSlhBR',
        '100%',
        'rgba(0,0,0,0.7)',
        'rotate',
        'Arial,\x20Helvetica,\x20sans-serif',
        '100px',
        '99999',
        'click',
        'none',
        '100vh',
        'fixed',
        'rgba(0,\x200,\x200,\x200.5)',
        'Opacidade\x20',
        '60px',
        '10px',
        'mouseleave',
        '25px',
        '200ms\x20ease-in-out',
        '500px',
        'CreateTab',
        'background-color'
    ];
    _0x5383 = function () {
        return _0x24b14d;
    };
    return _0x5383();
}
Object[_0x30f78b(0x74)](meu_titulo[_0x30f78b(0xb8)], {
    'color': _0x30f78b(0x95),
    'font-family': _0x30f78b(0xa5)
});
Object[_0x30f78b(0x74)](lugar_para_flex['style'], {
    'display': _0x30f78b(0x7b),
    'width': _0x30f78b(0xa2),
    'height': _0x30f78b(0xa2)
});
open_menu__[_0x30f78b(0x94)] = _0x30f78b(0x9d);
meu_titulo[_0x30f78b(0x94)] = _0x30f78b(0x68);
menu____[_0x30f78b(0x78)](meu_titulo);
menu____[_0x30f78b(0x78)](lugar_para_flex);
lugar_para_flex[_0x30f78b(0x78)](abrir_tabs);
lugar_para_flex[_0x30f78b(0x78)](tabs_abertas);
body_[_0x30f78b(0x78)](menu____);
body_[_0x30f78b(0x78)](open_menu__);
