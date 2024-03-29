g.setNode("summary", {node: 'summary', title: 'Podsumowanie'});
g.setNode("loadLevel", {});
g.setNode("step_1", {
    node: 'step_1',
    title: 'baza',
    label: 'wybierz bazę',
    number: 1,
    zIndex: 10,
    optionsFilter: false,
    overlay: true,
    overlay_z: 150,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});
g.setNode("base_box", {
    node: 'base_box',
    label: 'Base box',
    img: 'baza_base_box.jpg',
    render: '/bazy/baza_base_box_h31_novel13.png',
    colors: 'base_box_colors_7',

});
g.setNode("baza_kontynentalna", {
    node: 'baza_kontynentalna',
    label: 'Kontynent',
    img: 'kontynent.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png',
    colors: 'kontynent_colors_7',

});
g.setNode("baza_kontynentalna_z_szuflada", {
    node: 'baza_kontynentalna_z_szuflada',
    label: 'Kontynent z szufladą',
    img: 'kontynent_z_szuflada.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png',
    colors: 'kontynent_szuflada_colors_7',

});
g.setNode("baza_tapicerowana", {
    node: 'baza_tapicerowana',
    label: 'Baza tapicerowana',
    img: 'baza_tapicerowana.jpg',
    render: '/bazy/baza_tapicerowana_h34_novel13.png',
    colors: 'tapicerowana_colors_7',

});
g.setNode("box_podnoszony", {
    node: 'box_podnoszony',
    label: 'Box-podnoszony',
    img: 'box_podnoszony.jpg',
    render: '/bazy/baza_box_podnoszony_h31_novel13.png',
    colors: 'base_podnoszony_colors_7',

});

g.setNode("base_box_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2029.0, g2: 2159.0},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2179.0, g2: 2309.0},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2599.0, g2: 2719.0},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1479.0, g2: 2*1599.0},
    nextStep: 'bb_wezglowie'
});

g.setNode("baza_kontynentalna_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2599.0, g2: 2849.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2*1979.0, g2: 2*2159.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*2029.0, g2: 2*2229.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2239.0, g2: 2*2419.0},
    nextStep: 'step_2'
});

g.setNode("baza_kontynentalna_z_szuflada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3959.0, g2: 4199.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2*2469.0, g2: 2*2719.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*2679.0, g2: 2*2939.0},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2899.0, g2: 2*3159.0},
    nextStep: 'step_2'
});


g.setNode("baza_tapicerowana_90_200", {
    label: '90/200',
    width: 90, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie_90'
});
g.setNode("baza_tapicerowana_140_200", {
    label: '140/200',
    width: 140, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_160_200", {
    label: '160/200',
    width: 160, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_180_200", {
    label: '180/200',
    width: 180, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_200_200", {
    label: '200/200',
    width: 200, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});


g.setNode("box_podnoszony_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4529.0, g2: 4769.0},
    nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2*2779.0, g2: 2*2979.0},
    nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*2969.0, g2: 2*3159.0},
    nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3299.0, g2: 2*3539.0},
    nextStep: 'bp_wezglowie'
});

g.setNode("kontynent_colors_7", {});

g.setNode("kontynent_novel", {
    g: 1,
    name: 'milos 98',
    node: 'kontynent_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png'
});
g.setNode("kontynent_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'kontynent_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_h31_roko08.png'
});

g.setNode("kontynent_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'kontynent_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_h31_eren07.png'
});
g.setNode("kontynent_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_h31_ontario90.png'
});
g.setNode("kontynent_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'kontynent_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_h31_riviera38.png'
});

g.setNode("kontynent_colors_7", {});
g.setNode("kontynent_novel", {
    g: 1,
    name: 'milos 98',
    node: 'kontynent_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png'
});
g.setNode("kontynent_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'kontynent_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_h31_roko08.png'
});

g.setNode("kontynent_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'kontynent_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_h31_eren07.png'
});
g.setNode("kontynent_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_h31_ontario90.png'
});
g.setNode("kontynent_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'kontynent_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_h31_riviera38.png'
});

g.setNode("kontynent_szuflada_colors_7", {});
g.setNode("kontynent_szuflada_novel", {
    g: 1,
    name: 'milos 98',
    node: 'kontynent_szuflada_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png'
});
g.setNode("kontynent_szuflada_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'kontynent_szuflada_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_roko08.png'
});

g.setNode("kontynent_szuflada_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'kontynent_szuflada_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_eren07.png'
});
g.setNode("kontynent_szuflada_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_szuflada_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_ontario90.png'
});
g.setNode("kontynent_szuflada_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'kontynent_szuflada_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_riviera38.png'
});

g.setNode("base_box_colors_7", {});
g.setNode("base_box_novel", {
    g: 1,
    name: 'milos 98',
    node: 'base_box_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_base_box_h31_novel13.png'
});
g.setNode("base_box_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'base_box_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_base_box_h31_roko08.png'
});

g.setNode("base_box_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'base_box_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_base_box_h31_eren07.png'
});
g.setNode("base_box_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'base_box_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_base_box_h31_ontario90.png'
});
g.setNode("base_box_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'base_box_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_base_box_h31_riviera38.png'
});

g.setNode("base_podnoszony_colors_7", {});

g.setNode("base_podnoszony_novel", {
    g: 1,
    name: 'milos 98',
    node: 'base_podnoszony_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_box_podnoszony_h31_novel13.png'
});
g.setNode("base_podnoszony_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'base_podnoszony_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_box_podnoszony_h31_roko08.png'
});

g.setNode("base_podnoszony_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'base_podnoszony_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_box_podnoszony_h31_eren07.png'
});
g.setNode("base_podnoszony_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'base_podnoszony_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_box_podnoszony_h31_ontario90.png'
});
g.setNode("base_podnoszony_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'base_podnoszony_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_box_podnoszony_h31_riviera38.png'
});

g.setNode("tapicerowana_colors_7", {});
g.setNode("tapicerowana_novel", {
    g: 1,
    name: 'milos 98',
    node: 'tapicerowana_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_tapicerowana_h34_novel13.png',
    overlay: '/bazy/baza_tapicerowana_h34_novel13_add.png'
});
g.setNode("tapicerowana_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'tapicerowana_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_tapicerowana_h34_roko08.png',
    overlay: '/bazy/baza_tapicerowana_h34_roko08_add.png'
});

g.setNode("tapicerowana_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'tapicerowana_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_tapicerowana_h34_eren07.png',
    overlay: '/bazy/baza_tapicerowana_h34_eren07_add.png'
});
g.setNode("tapicerowana_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'tapicerowana_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_tapicerowana_h34_ontario90.png',
    overlay: '/bazy/baza_tapicerowana_h34_ontario90_add.png'
});
g.setNode("tapicerowana_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'tapicerowana_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_tapicerowana_h34_riviera38.png',
    overlay: '/bazy/baza_tapicerowana_h34_riviera38_add.png'
});

//***********************************************

g.setNode("urban_colors_7", {});
g.setNode("urban_novel", {
    g: 1,
    name: 'milos 98',
    node: 'urban_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png'
});
g.setNode("urban_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'urban_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_urban_95_roko08.png'
});

g.setNode("urban_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'urban_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_urban_95_eren07.png'
});
g.setNode("urban_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'urban_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_urban_95_ontario90.png'
});
g.setNode("urban_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'urban_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_urban_95_riviera38.png'
});

g.setNode("preppy_colors_7", {});
g.setNode("preppy_novel", {
    g: 1,
    name: 'milos 98',
    node: 'preppy_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png'
});
g.setNode("preppy_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'preppy_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_preppy_95_roko08.png'
});

g.setNode("preppy_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'preppy_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_preppy_95_eren07.png'
});
g.setNode("preppy_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'preppy_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_preppy_95_ontario90.png'
});
g.setNode("preppy_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'preppy_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_preppy_95_riviera38.png'
});

g.setNode("glamour_colors_7", {});
g.setNode("glamour_novel", {
    g: 1,
    name: 'milos 98',
    node: 'glamour_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    overlay: '/wezglowia/wezglowie_glamour_115_novel13_add.png'
});
g.setNode("glamour_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'glamour_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_glamour_115_roko08.png',
    overlay: '/wezglowia/wezglowie_glamour_115_roko08_add.png'
});

g.setNode("glamour_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'glamour_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_glamour_115_eren07.png',
    overlay: '/wezglowia/wezglowie_glamour_115_eren07_add.png',
});
g.setNode("glamour_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'glamour_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_glamour_115_ontario90.png',
    overlay: '/wezglowia/wezglowie_glamour_115_ontario90_add.png'
});
g.setNode("glamour_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'glamour_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_glamour_115_riviera38.png',
    overlay: '/wezglowia/wezglowie_glamour_115_riviera38_add.png'

});

g.setNode("vintage_colors_7", {});
g.setNode("vintage_novel", {
    g: 1,
    name: 'milos 98',
    node: 'vintage_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    overlay: '/wezglowia/wezglowie_vintage_95_novel13_add.png'
});
g.setNode("vintage_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'vintage_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_vintage_95_roko08.png',
    overlay: '/wezglowia/wezglowie_vintage_95_roko08_add.png'
});

g.setNode("vintage_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'vintage_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_vintage_95_eren07.png',
    overlay: '/wezglowia/wezglowie_vintage_95_eren07_add.png'
});
g.setNode("vintage_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'vintage_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_vintage_95_ontario90.png',
    overlay: '/wezglowia/wezglowie_vintage_95_ontario90_add.png'
});
g.setNode("vintage_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'vintage_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_vintage_95_riviera38.png',
    overlay: '/wezglowia/wezglowie_vintage_95_riviera38_add.png'
});

g.setNode("eclectic_colors_7", {});
g.setNode("eclectic_novel", {
    g: 1,
    name: 'milos 98',
    node: 'eclectic_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png'
});
g.setNode("eclectic_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'eclectic_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_roko08.png'
});

g.setNode("eclectic_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'eclectic_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_eren07.png'
});
g.setNode("eclectic_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'eclectic_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_ontario90.png'
});
g.setNode("eclectic_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'eclectic_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_riviera38.png'
});

g.setNode("ladylike_colors_7", {});
g.setNode("ladylike_novel", {
    g: 1,
    name: 'milos 98',
    node: 'ladylike_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png'
});
g.setNode("ladylike_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'ladylike_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_roko08.png'
});

g.setNode("ladylike_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'ladylike_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_eren07.png'
});
g.setNode("ladylike_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'ladylike_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_ontario90.png'
});
g.setNode("ladylike_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'ladylike_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_riviera38.png'
});

g.setNode("momiko_colors_7", {});
g.setNode("momiko_novel", {
    g: 1,
    name: 'milos 98',
    node: 'momiko_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png'
});
g.setNode("momiko_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'momiko_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_momiko_95_roko08.png'
});

g.setNode("momiko_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'momiko_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_momiko_95_eren07.png'
});
g.setNode("momiko_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'momiko_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_momiko_95_ontario90.png'
});
g.setNode("momiko_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'momiko_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_momiko_95_riviera38.png'
});

//**************************************************
g.setNode("urban_colors_7_170", {});
g.setNode("urban_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'urban_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_novel13.png'
});
g.setNode("urban_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'urban_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_roko08.png'
});
g.setNode("urban_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'urban_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_aspen04.png'
});
g.setNode("urban_river_170", {
    g: 2,
    name: 'river 01',
    node: 'urban_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_river02.png'
});
g.setNode("urban_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'urban_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_eren07.png'
});
g.setNode("urban_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'urban_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_ontario90.png'
});
g.setNode("urban_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'urban_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_riviera38.png'
});

g.setNode("preppy_colors_7_170", {});
g.setNode("preppy_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'preppy_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_novel13.png'
});
g.setNode("preppy_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'preppy_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_roko08.png'
});
g.setNode("preppy_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'preppy_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_aspen04.png'
});
g.setNode("preppy_river_170", {
    g: 2,
    name: 'river 01',
    node: 'preppy_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_river02.png'
});
g.setNode("preppy_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'preppy_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_eren07.png'
});
g.setNode("preppy_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'preppy_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_ontario90.png'
});
g.setNode("preppy_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'preppy_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_riviera38.png'
});
g.setNode("glamour_colors_7_170", {});
g.setNode("glamour_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'glamour_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_novel13.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_novel13_add.png'
});
g.setNode("glamour_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'glamour_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_roko08.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_roko08_add.png'
});
g.setNode("glamour_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'glamour_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_aspen04.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_aspen04_add.png'
});
g.setNode("glamour_river_170", {
    g: 2,
    name: 'river 01',
    node: 'glamour_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_river02.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_river02_add.png'
});
g.setNode("glamour_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'glamour_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_eren07.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_eren07_add.png',
});
g.setNode("glamour_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'glamour_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_ontario90.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_ontario90_add.png'
});
g.setNode("glamour_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'glamour_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_riviera38.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_riviera38_add.png'

});

g.setNode("vintage_colors_7_170", {});
g.setNode("vintage_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'vintage_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_novel13.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_novel13_add.png'
});
g.setNode("vintage_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'vintage_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_roko08.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_roko08_add.png'
});
g.setNode("vintage_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'vintage_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_aspen04.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_aspen04_add.png'
});
g.setNode("vintage_river_170", {
    g: 1,
    name: 'river 01',
    node: 'vintage_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_river02.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_river02_add.png'
});
g.setNode("vintage_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'vintage_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_eren07.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_eren07_add.png'
});
g.setNode("vintage_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'vintage_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_ontario90.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_ontario90_add.png'
});
g.setNode("vintage_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'vintage_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_riviera38.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_riviera38_add.png'
});

g.setNode("eclectic_colors_7_170", {});
g.setNode("eclectic_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'eclectic_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_novel13.png'
});
g.setNode("eclectic_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'eclectic_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_roko08.png'
});
g.setNode("eclectic_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'eclectic_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_aspen04.png'
});
g.setNode("eclectic_river_170", {
    g: 2,
    name: 'river 01',
    node: 'eclectic_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_river02.png'
});
g.setNode("eclectic_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'eclectic_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_eren07.png'
});
g.setNode("eclectic_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'eclectic_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_ontario90.png'
});
g.setNode("eclectic_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'eclectic_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_riviera38.png'
});

g.setNode("ladylike_colors_7_170", {});
g.setNode("ladylike_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'ladylike_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_novel13.png'
});
g.setNode("ladylike_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'ladylike_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_roko08.png'
});
g.setNode("ladylike_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'ladylike_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_aspen04.png'
});
g.setNode("ladylike_river_170", {
    g: 2,
    name: 'river 01',
    node: 'ladylike_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_river02.png'
});
g.setNode("ladylike_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'ladylike_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_eren07.png'
});
g.setNode("ladylike_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'ladylike_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_ontario90.png'
});
g.setNode("ladylike_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'ladylike_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_riviera38.png'
});

g.setNode("momiko_colors_7_170", {});
g.setNode("momiko_novel_170", {
    g: 1,
    name: 'milos 98',
    node: 'momiko_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_novel13.png'
});
g.setNode("momiko_roko_170", {
    g: 2,
    name: 'zoya 07',
    node: 'momiko_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_roko08.png'
});
g.setNode("momiko_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'momiko_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_aspen04.png'
});
g.setNode("momiko_river_170", {
    g: 2,
    name: 'river 01',
    node: 'momiko_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_river02.png'
});
g.setNode("momiko_eren_170", {
    g: 2,
    name: 'zoya 03',
    node: 'momiko_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_eren07.png'
});
g.setNode("momiko_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'momiko_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_ontario90.png'
});
g.setNode("momiko_riviera_170", {
    g: 2,
    name: 'piano 26',
    node: 'momiko_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_riviera38.png'
});

//********************************

g.setNode("covers_cashmere", {});
g.setNode("cover_cashmere", {
    g: 1,
    name: 'cashmere',
    node: 'cover_cashmere',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_tencel_new", {});
g.setNode("cover_italiano", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet", {});
g.setNode("cover_velvet", {
    g: 1,
    name: 'velvet',
    node: 'cover_velvet',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_velvet_new", {
    g: 1,
    name: 'velvet new',
    node: 'cover_velvet_new',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_tencel", {});
g.setNode("covers_tencel", {});
g.setNode("cover_tencel", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_new_tencel_new", {});
g.setNode("covers_tencel_new", {});
g.setNode("cover_tencel_new", {
    g: 2,
    name: 'tencel new',
    node: 'cover_tencel_new',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_merced_elips", {});
g.setNode("cover_merced_1", {
    g: 1,
    name: 'merced',
    node: 'cover_merced_1',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_hybrid", {});
g.setNode("cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_merced_2", {
    g: 2,
    name: 'merced',
    node: 'cover_merced_2',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_elips_medicott", {});
g.setNode("cover_elips_1", {
    g: 1,
    name: 'elips',
    node: 'cover_elips_1',
    url: './img/pokrowce/elips.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_elips_2", {
    g: 2,
    name: 'elips',
    node: 'cover_elips_2',
    url: './img/pokrowce/elips.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_hybrid_2", {
    g: 2,
    name: 'hybrid' ,
    node: 'cover_hybrid_2',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_medicott", {
    g: 2,
    name: 'medicot velur',
    node: 'cover_medicott',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_cashmere_tencel_top", {});
g.setNode("cover_cashmere_top", {
    g: 1,
    name: 'Cashmere',
    node: 'cover_cashmere_top',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("covers_tencel_top", {});
g.setNode("cover_tencel_top", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_top',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h31.png'
});

g.setNode("covers_silver", {});
g.setNode("cover_silver", {
    g: 1,
    name: 'silver',
    node: 'cover_silver',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_medicover", {});
g.setNode("cover_medicover", {
    g: 1,
    name: 'Medicover',
    node: 'cover_medicover',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_young", {});
g.setNode("cover_young", {
    g: 1,
    name: 'Young',
    node: 'cover_young',
    url: './img/pokrowce/young.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_italiano", {});
g.setNode("cover_italiano", {
    g: 1,
    name: 'Italiano',
    node: 'cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_probiotex", {});
g.setNode("cover_probiotex", {
    g: 1,
    name: 'Probiotex new',
    node: 'cover_probiotex',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_tencel_top", {});

//*******************************************

g.setNode("bp_covers_cashmere", {});
g.setNode("bp_cover_cashmere", {
    g: 1,
    name: 'cashmere',
    node: 'bp_cover_cashmere',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_italiano_tencel_new", {});
g.setNode("bp_cover_italiano", {
    g: 1,
    name: 'italiano',
    node: 'bp_cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet_tencel", {});
g.setNode("bp_covers_tencel", {});
g.setNode("bp_cover_tencel", {
    g: 2,
    name: 'tencel',
    node: 'bp_cover_tencel',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet", {});
g.setNode("bp_cover_velvet", {
    g: 1,
    name: 'velvet',
    node: 'bp_cover_velvet',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_velvet_new_tencel_new", {});
g.setNode("bp_covers_tencel_new", {});
g.setNode("bp_cover_tencel_new", {
    g: 2,
    name: 'tencel new',
    node: 'bp_cover_tencel_new',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet_new", {});
g.setNode("bp_cover_velvet_new", {
    g: 1,
    name: 'velvet<new>new',
    node: 'bp_cover_velvet_new',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_merced_elips", {});
g.setNode("bp_cover_merced_1", {
    g: 1,
    name: 'merced',
    node: 'bp_cover_merced_1',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_italiano_hybrid", {});
g.setNode("bp_cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'bp_cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_elips_2", {
    g: 2,
    name: 'elips',
    node: 'bp_cover_elips_2',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_merced_2", {
    g: 2,
    name: 'merced',
    node: 'bp_cover_merced_2',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_elips_medicott", {});
g.setNode("bp_cover_elips_1", {
    g: 1,
    name: 'elips',
    node: 'bp_cover_elips_1',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_hybrid_2", {
    g: 2,
    name: 'hybrid' ,
    node: 'bp_cover_hybrid_2',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_medicott", {
    g: 2,
    name: 'medicot velur',
    node: 'bp_cover_medicott',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_cashmere_tencel_top", {});
g.setNode("bp_cover_cashmere_top", {
    g: 1,
    name: 'Cashmere',
    node: 'bp_cover_cashmere_top',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h39.png'
});
g.setNode("bp_covers_tencel_top", {});
g.setNode("bp_cover_tencel_top", {
    g: 2,
    name: 'tencel',
    node: 'bp_cover_tencel_top',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h39.png'
});

g.setNode("bp_covers_silver", {});
g.setNode("bp_cover_silver", {
    g: 1,
    name: 'silver',
    node: 'bp_cover_silver',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_medicover", {});
g.setNode("bp_cover_medicover", {
    g: 1,
    name: 'Medicover',
    node: 'bp_cover_medicover',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_young", {});
g.setNode("bp_cover_young", {
    g: 1,
    name: 'Young',
    node: 'bp_cover_young',
    url: './img/pokrowce/teenage.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_italiano", {});
g.setNode("bp_cover_italiano", {
    g: 1,
    name: 'Italiano',
    node: 'bp_cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_probiotex", {});
g.setNode("bp_cover_probiotex", {
    g: 1,
    name: 'Probiotex new',
    node: 'bp_cover_probiotex',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_tencel_top", {});

//*******************************************

g.setNode("covers_cashmere_t", {});
g.setNode("cover_cashmere_t", {
    g: 1,
    name: 'cashmere',
    node: 'cover_cashmere_t',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h34.png'
});

g.setNode("covers_italiano_tencel_new_t", {});
g.setNode("cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_velvet_t", {});
g.setNode("cover_velvet_t", {
    g: 1,
    name: 'velvet',
    node: 'cover_velvet_t',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h34.png'
});
g.setNode("cover_velvet_new_t", {
    g: 1,
    name: 'velvet new',
    node: 'cover_velvet_new_t',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h34.png'
});

g.setNode("covers_velvet_tencel_t", {});
g.setNode("covers_tencel_t", {});
g.setNode("cover_tencel_t", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_new_tencel_new_t", {});
g.setNode("covers_tencel_new_t", {});
g.setNode("cover_tencel_new_t", {
    g: 2,
    name: 'tencel new',
    node: 'cover_tencel_new_t',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_merced_elips_t", {});
g.setNode("cover_merced_1_t", {
    g: 1,
    name: 'merced',
    node: 'cover_merced_1_t',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_elips_2_t", {
    g: 2,
    name: 'elips',
    node: 'cover_elips_2_t',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_hybrid_t", {});
g.setNode("cover_italiano_1_t", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1_t',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_merced_2_t", {
    g: 2,
    name: 'merced',
    node: 'cover_merced_2_t',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_elips_medicott_t", {});
g.setNode("cover_elips_1_t", {
    g: 1,
    name: 'elips',
    node: 'cover_elips_1_t',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_hybrid_2_t", {
    g: 2,
    name: 'hybrid' ,
    node: 'cover_hybrid_2_t',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_medicott_t", {
    g: 2,
    name: 'medicot velur',
    node: 'cover_medicott_t',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_cashmere_tencel_top_t", {});
g.setNode("cover_cashmere_top_t", {
    g: 1,
    name: 'Cashmere',
    node: 'cover_cashmere_top_t',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("cover_tencel_top_t", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_top_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("covers_silver_t", {});
g.setNode("cover_silver_t", {
    g: 1,
    name: 'silver',
    node: 'cover_silver_t',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_medicover_t", {});
g.setNode("cover_medicover_t", {
    g: 1,
    name: 'Medicover',
    node: 'cover_medicover_t',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_young_t", {});
g.setNode("cover_young_t", {
    g: 1,
    name: 'Young',
    node: 'cover_young_t',
    url: './img/pokrowce/young.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_italiano_t", {});
g.setNode("cover_italiano_t", {
    g: 1,
    name: 'Italiano',
    node: 'cover_italiano_t',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_probiotex_t", {});
g.setNode("cover_probiotex_t", {
    g: 1,
    name: 'Probiotex new',
    node: 'cover_probiotex_t',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_tencel_top_t", {});
g.setNode("cover_tencel_top_t", {
    g: 1,
    name: 'tencel',
    node: 'cover_tencel_top_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

//********************

g.setNode("m_tap_colors_7", {});
g.setNode("m_tap_novel", {
    g: 1,
    name: 'milos 98',
    node: 'm_tap_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/materace/materac_tapicerowany_h31_novel13.png'
});
g.setNode("m_tap_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'm_tap_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/materace/materac_tapicerowany_h31_roko08.png'
});

g.setNode("m_tap_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'm_tap_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/materace/materac_tapicerowany_h31_eren07.png'
});
g.setNode("m_tap_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'm_tap_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/materace/materac_tapicerowany_h31_ontario90.png'
});
g.setNode("m_tap_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'm_tap_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/materace/materac_tapicerowany_h31_riviera38.png'
});

//**********************************************************

g.setNode("bp_tap_colors_7", {});
g.setNode("bp_tap_novel", {
    g: 1,
    name: 'milos 98',
    node: 'bp_tap_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/materace/materac_tapicerowany_h31_novel13.png'
});
g.setNode("bp_tap_roko", {
    g: 2,
    name: 'zoya 07',
    node: 'bp_tap_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/materace/materac_tapicerowany_h31_roko08.png'
});

g.setNode("bp_tap_eren", {
    g: 2,
    name: 'zoya 03',
    node: 'bp_tap_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/materace/materac_tapicerowany_h31_eren07.png'
});
g.setNode("bp_tap_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'bp_tap_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/materace/materac_tapicerowany_h31_ontario90.png'
});
g.setNode("bp_tap_riviera", {
    g: 2,
    name: 'piano 26',
    node: 'bp_tap_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/materace/materac_tapicerowany_h31_riviera38.png'
});

//***********************************************************************

g.setNode("step_2", {
    node: 'step_2',
    title: 'wezgłowie',
    label: 'wybierz wezgłowie',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

g.setNode("glamour", {
    node: 'glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("vintage", {
    node: 'vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("eclectic", {
    node: 'eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("ladylike", {
    node: 'ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("preppy", {
    node: 'preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("momiko", {
    node: 'momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'step_typ_materaca',

});
g.setNode("urban", {
    node: 'urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'step_typ_materaca',

});

g.setNode("bb_wezglowie", {
    node: 'bb_wezglowie',
    title: 'wezgłowie',
    label: 'wybierz wezgłowie',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

g.setNode("bb_wezglowie_glamour", {
    node: 'bb_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_vintage", {
    node: 'bb_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_eclectic", {
    node: 'bb_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_ladylike", {
    node: 'bb_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_preppy", {
    node: 'bb_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_momiko", {
    node: 'bb_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'legs',

});
g.setNode("bb_wezglowie_urban", {
    node: 'bb_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'legs',

});

g.setNode("bp_wezglowie", {
    node: 'bp_wezglowie',
    title: 'wezgłowie',
    label: 'wybierz wezgłowie',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

g.setNode("bp_wezglowie_glamour", {
    node: 'bp_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_vintage", {
    node: 'bp_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_eclectic", {
    node: 'bp_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_ladylike", {
    node: 'bp_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_preppy", {
    node: 'bp_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_momiko", {
    node: 'bp_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'bp_step_typ_materaca',

});
g.setNode("bp_wezglowie_urban", {
    node: 'bp_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'bp_step_typ_materaca',

});

g.setNode("t_wezglowie", {
    node: 't_wezglowie',
    title: 'wezgłowie',
    label: 'wybierz wezgłowie',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.',

});

g.setNode("t_wezglowie_glamour", {
    node: 't_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_novel13.png',
    colors: 'glamour_colors_7_170',
    nextStep: 'legs',

});
g.setNode("t_wezglowie_vintage", {
    node: 't_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_novel13.png',
    colors: 'vintage_colors_7_170',
    nextStep: 'legs',

});
g.setNode("t_wezglowie_eclectic", {
    node: 't_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_novel13.png',
    colors: 'eclectic_colors_7_170',
    nextStep: 'legs',

});
g.setNode("t_wezglowie_ladylike", {
    node: 't_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_novel13.png',
    colors: 'ladylike_colors_7_170',
    nextStep: 'legs',

});
g.setNode("t_wezglowie_preppy", {
    node: 't_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_novel13.png',
    colors: 'preppy_colors_7_170',
    nextStep: 'legs',

});
g.setNode("t_wezglowie_momiko", {
    node: 't_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_novel13.png',
    colors: 'momiko_colors_7_170',
    nextStep: 'legs',

});

g.setNode("t_wezglowie_90", {
    node: 't_wezglowie_90',
    title: 'wezgłowie',
    label: 'wybierz wezgłowie',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    info: 'Wizualizacja prezentuje model łóżka w wymiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});
g.setNode("t_wezglowie_urban", {
    node: 't_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_novel13.png',
    colors: 'urban_colors_7_170',
    nextStep: 'legs',

});

//*******************************************

g.setNode("urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 919, g2: 1049},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 979.0, g2: 1109.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1109.0, g2: 1239.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1239.0, g2: 1359.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 999.0, g2: 1109.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1049.0, g2: 1169.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1169.0, g2: 1299.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1299.0, g2: 1419.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1459.0, g2: 1569.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1489.0, g2: 1599.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1619.0, g2: 1729.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1599.0, g2: 1729.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1979.0, g2: 2109.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1699.0, g2: 1799.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1769.0, g2: 1869.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1929.0, g2: 2059.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2139.0, g2: 2249.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1279.0, g2: 1399.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1309.0, g2: 1439.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1439.0, g2: 1569.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1449.0, g2: 1579.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1609.0, g2: 1739.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1859.0, g2: 1979.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1069.0, g2: 1209.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1119.0, g2: 1299.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1239.0, g2: 1369.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1369.0, g2: 1479.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1249.0, g2: 1379.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1329.0, g2: 1449.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1379.0, g2: 1489.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1739.0, g2: 1849.0},
    nextStep: 'step_typ_materaca'
});

g.setNode("ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1209.0, g2: 1319.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'step_typ_materaca'
});

//*********************************************

g.setNode("bb_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 919, g2: 1049},
    nextStep: 'legs'
});
g.setNode("bb_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 979.0, g2: 1109.0},
    nextStep: 'legs'
});
g.setNode("bb_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1109.0, g2: 1239.0},
    nextStep: 'legs'
});
g.setNode("bb_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1239.0, g2: 1359.0},
    nextStep: 'legs'
});

g.setNode("bb_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 999.0, g2: 1109.0},
    nextStep: 'legs'
});
g.setNode("bb_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1049.0, g2: 1169.0},
    nextStep: 'legs'
});
g.setNode("bb_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1169.0, g2: 1299.0},
    nextStep: 'legs'
});
g.setNode("bb_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1299.0, g2: 1419.0},
    nextStep: 'legs'
});

g.setNode("bb_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1459.0, g2: 1569.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1489.0, g2: 1599.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1619.0, g2: 1729.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'legs'
});

g.setNode("bb_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1599.0, g2: 1729.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'legs'
});
g.setNode("bb_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1979.0, g2: 2109.0},
    nextStep: 'legs'
});

g.setNode("bb_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1699.0, g2: 1799.0},
    nextStep: 'legs'
});
g.setNode("bb_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1769.0, g2: 1869.0},
    nextStep: 'legs'
});
g.setNode("bb_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1929.0, g2: 2059.0},
    nextStep: 'legs'
});
g.setNode("bb_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2139.0, g2: 2249.0},
    nextStep: 'legs'
});

g.setNode("bb_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1279.0, g2: 1399.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1309.0, g2: 1439.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1439.0, g2: 1569.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'legs'
});

g.setNode("bb_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1449.0, g2: 1579.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1609.0, g2: 1739.0},
    nextStep: 'legs'
});
g.setNode("bb_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1859.0, g2: 1979.0},
    nextStep: 'legs'
});

g.setNode("bb_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1069.0, g2: 1209.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1119.0, g2: 1299.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1239.0, g2: 1369.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1369.0, g2: 1479.0},
    nextStep: 'legs'
});

g.setNode("bb_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'legs'
});
g.setNode("bb_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'legs'
});

g.setNode("bb_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1249.0, g2: 1379.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'legs'
});

g.setNode("bb_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1329.0, g2: 1449.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1379.0, g2: 1489.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1739.0, g2: 1849.0},
    nextStep: 'legs'
});

g.setNode("bb_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1209.0, g2: 1319.0},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'legs'
});

//****************************

g.setNode("bp_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 919, g2: 1049},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 979.0, g2: 1109.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1109.0, g2: 1239.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1239.0, g2: 1359.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 999.0, g2: 1109.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1049.0, g2: 1169.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1169.0, g2: 1299.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1299.0, g2: 1419.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1459.0, g2: 1569.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1489.0, g2: 1599.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1619.0, g2: 1729.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1599.0, g2: 1729.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1729.0, g2: 1849.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1979.0, g2: 2109.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1699.0, g2: 1799.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1769.0, g2: 1869.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1929.0, g2: 2059.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2139.0, g2: 2249.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1279.0, g2: 1399.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1309.0, g2: 1439.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1439.0, g2: 1569.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1449.0, g2: 1579.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1609.0, g2: 1739.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1859.0, g2: 1979.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1069.0, g2: 1209.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1119.0, g2: 1299.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1239.0, g2: 1369.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1369.0, g2: 1479.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1199.0, g2: 1329.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1249.0, g2: 1379.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1329.0, g2: 1449.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1379.0, g2: 1489.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1499.0, g2: 1609.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1739.0, g2: 1849.0},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1209.0, g2: 1319.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1249.0, g2: 1369.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1369.0, g2: 1499.0},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1569.0, g2: 1699.0},
    nextStep: 'bp_step_typ_materaca'
});

//****************************

g.setNode("t_urban_90_95", {
    label: '90/95',
    width: 90,
    price: {g1: 1839.0, g2: 2089.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1929.0, g2: 2169.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2059.0, g2: 2289.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2309.0, g2: 2569.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2669.0, g2: 2919.0},
    nextStep: 't_legs'
});

g.setNode("t_urban_90_115", {
    label: '115',
    width: 90,
    price: {g1: 1949.0, g2: 2179.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2019.0, g2: 2279.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2159.0, g2: 2419.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2429.0, g2: 2689.0},
    nextStep: 't_legs'
});
g.setNode("t_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 't_legs'
});

g.setNode("t_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 2659.0, g2: 2889.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 3049.0, g2: 3309.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 3459.0, g2: 3699.0},
    nextStep: 't_legs'
});

g.setNode("t_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2779.0, g2: 3019.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2919.0, g2: 3159.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 3189.0, g2: 3419.0},
    nextStep: 't_legs'
});
g.setNode("t_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3699.0, g2: 3949.0},
    nextStep: 't_legs'
});
g.setNode("t_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2889.0, g2: 3149.0},
    nextStep: 't_legs'
});
g.setNode("t_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 3029.0, g2: 3279.0},
    nextStep: 't_legs'
});
g.setNode("t_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 3379.0, g2: 3639.0},
    nextStep: 't_legs'
});
g.setNode("t_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3819.0, g2: 4069.0},
    nextStep: 't_legs'
});

g.setNode("t_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 2469.0, g2: 2719.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2619.0, g2: 2859.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2879.0, g2: 3139.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 3279.0, g2: 3549.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2659.0, g2: 2889.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2779.0, g2: 3039.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 3049.0, g2: 3319.0},
    nextStep: 't_legs'
});
g.setNode("t_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3579.0, g2: 3819.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 2279.0, g2: 2519.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2419.0, g2: 2669.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2689.0, g2: 2929.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 3079.0, g2: 3339.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2409.0, g2: 2659.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2549.0, g2: 2779.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2819.0, g2: 3049.0},
    nextStep: 't_legs'
});
g.setNode("t_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 't_legs'
});

g.setNode("t_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 2399.0, g2: 2659.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2539.0, g2: 2779.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2819.0, g2: 3059.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 't_legs'
});

g.setNode("t_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2529.0, g2: 2779.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2669.0, g2: 2909.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2939.0, g2: 3189.0},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3449.0, g2: 3699.0},
    nextStep: 't_legs'
});

g.setNode("t_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2409.0, g2: 2659.0},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2539.0, g2: 2789.0},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2819.0, g2: 3059.0},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3289.0, g2: 3529.0},
    nextStep: 't_legs'
});


///-------------------------LEGS------------------

g.setNode("legs", {
    node: 'legs',
    title: 'nóżki',
    label: 'wybierz nóżki',
    number: 3,
    zIndex: 7,
    optionsFilter: true
});

g.setNode("stozek_owal_buk", {
    label: 'Stożek owal buk',
    img: 'stozek_owal_buk.jpg',
    render: '/nogi/noga_stozek_owal_buk.png'
});

g.setNode("stozek_owal_dab", {
    label: 'Stożek owal dąb',
    img: 'stozek_owal_dab.jpg',
    render: '/nogi/noga_stozek_owal_dab.png'
});

g.setNode("stozek_owal_wenge", {
    label: 'Stożek owal wenge',
    img: 'stozek_owal_wenge.jpg',
    render: '/nogi/noga_stozek_owal_wenge.png'
});

g.setNode("stozek_kwadrat_buk", {
    label: 'Stożek kwadrat buk',
    img: 'stozek_kwadrat_buk.jpg',
    render: '/nogi/noga_stozek_kwadrat_buk.png'
});

g.setNode("stozek_kwadrat_dab", {
    label: 'Stożek kwadrat dąb',
    img: 'stozek_kwadrat_dab.jpg',
    render: '/nogi/noga_stozek_kwadrat_dab.png'
});

g.setNode("stozek_kwadrat_wenge", {
    label: 'Stożek kwadrat wenge',
    img: 'stozek_kwadrat_wenge.jpg',
    render: '/nogi/noga_stozek_kwadrat_wenge.png'
});

g.setNode("stozek_skos_buk", {
    label: 'Stożek skos buk',
    img: 'stozek_skos_buk.jpg',
    render: '/nogi/noga_stozek_skos_buk.png'
});

g.setNode("stozek_skos_dab", {
    label: 'Stożek skos dąb',
    img: 'stozek_skos_dab.jpg',
    render: '/nogi/noga_stozek_skos_dab.png'
});

g.setNode("stozek_skos_wenge", {
    label: 'Stożek skos wenge',
    img: 'stozek_skos_wenge.jpg',
    render: '/nogi/noga_stozek_skos_wenge.png'
});

g.setNode("stozek_ze_stopka_czern", {
    label: 'Stożek ze stópką czerń',
    img: 'stozek_ze_stopka_czern.jpg',
    render: '/nogi/noga_stozek_stopka_czern.png'
});

g.setNode("stozek_ze_stopka_miedz", {
    label: 'Stożek ze stópką miedź',
    img: 'stozek_ze_stopka_miedz.jpg',
    render: '/nogi/noga_stozek_stopka_miedz.png'
});

g.setNode("stozek_ze_stopka_srebro", {
    label: 'Stożek ze stópką srebro',
    img: 'stozek_ze_stopka_srebro.jpg',
    render: '/nogi/noga_stozek_stopka_srebro.png'
});

g.setNode("trojkat_prosty_czern", {
    label: 'Trójkąt prosty czerń',
    img: 'trojkat_prosty_czern.jpg',
    render: '/nogi/noga_trojkat_prosty_czern.png'
});

g.setNode("trojkat_prosty_miedz", {
    label: 'Trójkąt prosty miedź',
    img: 'trojkat_prosty_miedz.jpg',
    render: '/nogi/noga_trojkat_prosty_miedz.png'
});

g.setNode("trojkat_prosty_srebro", {
    label: 'Trójkąt prosty srebro',
    img: 'trojkat_prosty_srebro.jpg',
    render: '/nogi/noga_trojkat_prosty_srebro.png'
});

g.setNode("trojkat_skosny_czern", {
    label: 'Trójkąt skośny czerń',
    img: 'trojkat_skosny_czern.jpg',
    render: '/nogi/noga_trojkat_skos_czern.png'
});

g.setNode("trojkat_skosny_miedz", {
    label: 'Trójkąt skośny miedź',
    img: 'trojkat_skosny_miedz.jpg',
    render: '/nogi/noga_trojkat_skos_miedz.png'
});

g.setNode("trojkat_skosny_srebro", {
    label: 'Trójkąt skośny srebro',
    img: 'trojkat_skosny_srebro.jpg',
    render: '/nogi/noga_trojkat_skos_srebro.png'
});

g.setNode("walek_czern", {
    label: 'Wałek czerń',
    img: 'walek_czern.jpg',
    render: '/nogi/noga_walek_czern.png'
});

g.setNode("walek_czern", {
    label: 'Wałek czerń',
    img: 'walek_czern.jpg',
    render: '/nogi/noga_walek_czern.png'
});

g.setNode("walek_miedz", {
    label: 'Wałek miedź',
    img: 'walek_miedz.jpg',
    render: '/nogi/noga_walek_miedz.png'
});

g.setNode("walek_srebro", {
    label: 'Wałek srebro',
    img: 'walek_srebro.jpg',
    render: '/nogi/noga_walek_srebro.png'
});

g.setNode("kielich_czern", {
    label: 'Kielich czerń',
    img: 'kielich_czern.jpg',
    render: '/nogi/noga_kielich_czern.png'
});

g.setNode("kielich_miedz", {
    label: 'Kielich miedź',
    img: 'kielich_miedz.jpg',
    render: '/nogi/noga_kielich_miedz.png'
});

g.setNode("kielich_srebro", {
    label: 'Kielich srebro',
    img: 'kielich_srebro.jpg',
    render: '/nogi/noga_kielich_srebro.png'
});

g.setNode("naroznik_czern", {
    label: 'Narożnik czerń',
    img: 'naroznik_czern.jpg',
    render: '/nogi/noga_naroznik_czern.png'
});

g.setNode("naroznik_miedz", {
    label: 'Narożnik miedź',
    img: 'naroznik_miedz.jpg',
    render: '/nogi/noga_naroznik_miedz.png'
});

g.setNode("naroznik_srebro", {
    label: 'Narożnik srebro',
    img: 'naroznik_srebro.jpg',
    render: '/nogi/noga_naroznik_srebro.png'
});

g.setNode("ploza_buk", {
    label: 'Płoza buk',
    img: 'ploza_buk.jpg',
    render: '/nogi/ploza_buk.png'
});
g.setNode("ploza_dab", {
    label: 'Płoza dąb',
    img: 'ploza_dab.jpg',
    render: '/nogi/ploza_dab.png'
});
g.setNode("ploza_wenge", {
    label: 'Płoza wenge',
    img: 'ploza_wenge.jpg',
    render: '/nogi/ploza_wenge.png'
});

g.setNode("stozek_owal_buk_16", {
    label: '16',
    price: {g1: 119, g2: 119},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_owal_wenge_16", {
    label: '16',
    price: {g1: 119, g2: 119},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_owal_dab_16", {
    label: '16',
    price: {g1: 155.0, g2: 155.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_buk_16", {
    label: '16',
    price: {g1: 127.0, g2: 127.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_wenge_16", {
    label: '16',
    price: {g1: 127.0, g2: 127.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_dab_16", {
    label: '16',
    price: {g1: 164.0, g2: 164.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_buk_16", {
    label: '16',
    price: {g1: 42.0, g2: 42.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_dab_16", {
    label: '16',
    price: {g1: 59, g2: 59},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_wenge_16", {
    label: '16',
    price: {g1: 42, g2: 42},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_czern_16", {
    label: '16',
    price: {g1: 203, g2: 203},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_miedz_16", {
    label: '16',
    price: {g1: 249, g2: 249},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_srebro_16", {
    label: '16',
    price: {g1: 192, g2: 192},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_czern_16", {
    label: '16',
    price: {g1: 127, g2: 127},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_miedz_16", {
    label: '16',
    price: {g1: 206, g2: 206},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_srebro_16", {
    label: '16',
    price: {g1: 136, g2: 136},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_czern_16", {
    label: '95',
    price: {g1: 160, g2: 160},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_miedz_16", {
    label: '16',
    price: {g1: 245, g2: 245},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_srebro_16", {
    label: '16',
    price: {g1: 171, g2: 171},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("walek_czern_16", {
    label: '16',
    price: {g1: 65, g2: 65},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("walek_miedz_16", {
    label: '16',
    price: {g1: 104, g2: 104},
    nextStep: 'step_typ_materaca'
});
g.setNode("walek_srebro_16", {
    label: '16',
    price: {g1: 72, g2: 72},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_czern_16", {
    label: '16',
    price: {g1: 203, g2: 203},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_miedz_16", {
    label: '16',
    price: {g1: 249, g2: 249},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_srebro_16", {
    label: '16',
    price: {g1: 192, g2: 192},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_czern_16", {
    label: '16',
    price: {g1: 108, g2: 108},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_miedz_16", {
    label: '16',
    price: {g1: 163, g2: 163},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_srebro_16", {
    label: '16',
    price: {g1: 134, g2: 134},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_buk_140", {
    label: '140',
    width: 140,
    price: {g1: 257, g2: 257},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_160", {
    label: '160',
    width: 160,
    price: {g1: 280, g2: 280},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_180", {
    label: '180',
    width: 180,
    price: {g1: 305, g2: 305},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_200", {
    label: '200',
    width: 200,
    price: {g1: 2*167, g2: 2*167},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_wenge_140", {
    label: '140',
    width: 140,
    price: {g1: 257, g2: 257},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_160", {
    label: '160',
    width: 160,
    price: {g1: 280, g2: 280},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_180", {
    label: '180',
    width: 180,
    price: {g1: 305, g2: 305},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_200", {
    label: '200',
    width: 200,
    price: {g1: 2*167, g2: 2*167},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_dab_140", {
    label: '140',
    width: 140,
    price: {g1: 551, g2: 551},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_160", {
    label: '160',
    width: 160,
    price: {g1: 607, g2: 607},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_180", {
    label: '180',
    width: 180,
    price: {g1: 664, g2: 664},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_200", {
    label: '200',
    width: 200,
    price: {g1: 2*360, g2: 2*360},
    nextStep: 'bb_step_typ_materaca'
});


g.setNode("t_legs", {
    node: 't_legs',
    title: 'nóżki',
    label: 'wybierz nożki',
    number: 3,
    zIndex: 7,
    optionsFilter: true
});
g.setNode("t_metal_trojkat_srebro", {
    label: 'Noga metalowa trójkąt srebro',
    img: 'trojkat_srebro.jpg',
    render: '/nogi/noga_trojkat_srebro.png',
});
g.setNode("t_metal_trojkat_miedz", {
    label: 'Noga metalowa trójkąt miedź',
    img: 'trojkat_miedz.jpg',
    render: '/nogi/noga_trojkat_miedz.png',
});
g.setNode("t_metal_trojkat_czarny", {
    label: 'Noga metalowa trójkąt czarny',
    img: 'trojkat_czarny.jpg',
    render: '/nogi/noga_trojkat_czern.png',
});
g.setNode("t_noga_drewniana_long_bug", {
    label: 'Noga drewnina long buk',
    img: 'prostokat_dab.jpg',
    render: '/nogi/noga_prostokat_buk.png',
});
g.setNode("t_noga_drewniana_long_wenge", {
    label: 'Noga drewnina long wenge',
    img: 'prostokat_wenge.jpg',
    render: '/nogi/noga_prostokat_wenge.png',
});

g.setNode("t_metal_trojkat_srebro_2", {
    label: '4,5',
    price: {g1: 53, g2: 53},
    nextStep: 't_materac'
});
g.setNode("t_metal_trojkat_miedz_2", {
    label: '4,5',
    price: {g1: 74, g2: 74},
    nextStep: 't_materac'
});
g.setNode("t_metal_trojkat_czarny_2", {
    label: '4,5',
    price: {g1: 53, g2: 53},
    nextStep: 't_materac'
});
g.setNode("t_noga_drewniana_long_bug_2", {
    label: '4,5',
    price: {g1: 46, g2: 46},
    nextStep: 't_materac'
});
g.setNode("t_noga_drewniana_long_wenge_2", {
    label: '4,5',
    price: {g1: 46, g2: 46},
    nextStep: 't_materac'
});

g.setEdge("t_legs", "t_metal_trojkat_srebro");
g.setEdge("t_legs", "t_metal_trojkat_miedz");
g.setEdge("t_legs", "t_metal_trojkat_czarny");
g.setEdge("t_legs", "t_noga_drewniana_long_bug");
g.setEdge("t_legs", "t_noga_drewniana_long_wenge");

g.setEdge("t_metal_trojkat_srebro", "t_metal_trojkat_srebro_2");
g.setEdge("t_metal_trojkat_miedz", "t_metal_trojkat_miedz_2");
g.setEdge("t_metal_trojkat_czarny", "t_metal_trojkat_czarny_2");
g.setEdge("t_noga_drewniana_long_bug", "t_noga_drewniana_long_bug_2");
g.setEdge("t_noga_drewniana_long_wenge", "t_noga_drewniana_long_wenge_2");


g.setNode("step_typ_materaca", {
    node: 'step_typ_materaca',
    title: 'typ materac',
    label: 'wybierz typ materaca',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("materac_pokrowiec", {
    label: 'W pokrowcu',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("materac_tapicerowany", {
    label: 'Tapicerowany',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png',

});

g.setNode("materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_pokrowiec'});
g.setNode("materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_tapicerowany'});

g.setNode("step_pokrowiec", {
    node: 'step_pokrowiec',
    title: 'materac w pokrowcu',
    label: 'wybierz materac w pokrowcu',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});
g.setNode("step_tapicerowany", {
    node: 'step_tapicerowany',
    title: 'materac tapicerowany',
    label: 'wybierz materac tapicerowany',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});

g.setNode("step_4", {
    node: 'step_4',
    title: 'materac',
    label: 'wybierz materac',
    number: 4,
    zIndex: 25,
    skipToNode: 'step_5',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});

g.setNode("materac_tango", {
    node: 'materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("materac_step", {
    node: 'materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("materac_salsa", {
    node: 'materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("materac_chacha", {
    node: 'materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("materac_pasodoble", {
    node: 'materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("materac_flamenco", {
    node: 'materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("materac_makarena", {
    node: 'materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips'
});
g.setNode("materac_rockroll", {
    node: 'materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("materac_foxtrot", {
    node: 'materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("materac_melody", {
    node: 'materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("materac_rumba", {
    node: 'materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott'
});
g.setNode("materac_boogie", {
    node: 'materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new'
});
g.setNode("materac_modern", {
    node: 'materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("materac_conga", {
    node: 'materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("materac_fandango", {
    node: 'materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover'
});
g.setNode("materac_zorba", {
    node: 'materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("materac_breakdance", {
    node: 'materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("materac_funky", {
    node: 'materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("materac_dance", {
    node: 'materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano'
});
g.setNode("materac_lambada", {
    node: 'materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex'
});
g.setNode("materac_electro", {
    node: 'materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel'
});


g.setNode("materac_foxtrot_tapicerowany", {
    node: 'materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});
g.setNode("materac_chacha_tapicerowany", {
    node: 'materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});
g.setNode("materac_flamenco_tapicerowany", {
    node: 'materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});


g.setNode("materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2189.0, g2: 2189.0},
    nextStep: 'step_5'
});
g.setNode("materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'step_5'
});
g.setNode("materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2619.0, g2: 2619.0},
    nextStep: 'step_5'
});
g.setNode("materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1759.0, g2: 2*1759.0},
    nextStep: 'step_5'
});

g.setNode("materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 949.0, g2: 949.0},
    nextStep: 'step_5'
});
g.setNode("materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1059.0, g2: 1059.0},
    nextStep: 'step_5'
});
g.setNode("materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1189.0, g2: 1189.0},
    nextStep: 'step_5'
});
g.setNode("materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*799.0, g2: 2*799.0},
    nextStep: 'step_5'
});

g.setNode("materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2689.0, g2: 2689.0},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2939.0, g2: 2939.0},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1929.0, g2: 2*1929.0},
    nextStep: 'step_5'
});

g.setNode("materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1859.0, g2: 1859.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2049.0, g2: 2049.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2289.0, g2: 2289.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1539.0, g2: 2*1539.0},
    nextStep: 'step_5'
});

g.setNode("materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2339.0, g2: 2339.0},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2579.0, g2: 2579.0},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2829.0, g2: 2829.0},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1869.0, g2: 2*1869.0},
    nextStep: 'step_5'
});

g.setNode("materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2539.0, g2: 2539.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2699.0, g2: 2699.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3159.0, g2: 3159.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2139.0, g2: 2*2139.0},
    nextStep: 'step_5'
});

g.setNode("materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4179.0, g2: 4179.0},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4619.0, g2: 4619.0},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5109.0, g2: 5109.0},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3489.0, g2: 2*3489.0},
    nextStep: 'step_5'
});


g.setNode("materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2079.0, g2: 2079.0},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2309.0, g2: 2309.0},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2529.0, g2: 2529.0},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1659.0, g2: 2*1659.0},
    nextStep: 'step_5'
});

g.setNode("materac_foxtrot_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2269.0, g2: 2269.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2499.0, g2: 2499.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2709.0, g2: 2709.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1849.0, g2: 2*1849.0},
    nextStep: 'step_5'
});

g.setNode("materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3209.0, g2: 3209.0},
    nextStep: 'step_5'
});
g.setNode("materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3679.0, g2: 3679.0},
    nextStep: 'step_5'
});
g.setNode("materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3929.0, g2: 3929.0},
    nextStep: 'step_5'
});
g.setNode("materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2719.0, g2: 2*2719.0},
    nextStep: 'step_5'
});

g.setNode("materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3699.0, g2: 4189.0},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4119.0, g2: 4699.0},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4559.0, g2: 5169.0},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3149.0, g2: 2*3449.0},
    nextStep: 'step_5'
});

g.setNode("materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4459.0, g2: 4459.0},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4819.0, g2: 4819.0},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5309.0, g2: 5309.0},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3649.0, g2: 2*3649.0},
    nextStep: 'step_5'
});

g.setNode("materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3549.0, g2: 3549.0},
    nextStep: 'step_5'
});
g.setNode("materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3969.0, g2: 3969.0},
    nextStep: 'step_5'
});
g.setNode("materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4349.0, g2: 4349.0},
    nextStep: 'step_5'
});
g.setNode("materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2869.0, g2: 2*2869.0},
    nextStep: 'step_5'
});

g.setNode("materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3259.0, g2: 3259.0},
    nextStep: 'step_5'
});
g.setNode("materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3629.0, g2: 3629.0},
    nextStep: 'step_5'
});
g.setNode("materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3959.0, g2: 3959.0},
    nextStep: 'step_5'
});
g.setNode("materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2619.0},
    nextStep: 'step_5'
});

g.setNode("materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1539.0, g2: 1539.0},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1699.0, g2: 1699.0},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1119.0, g2: 2*1119.0},
    nextStep: 'step_5'
});

g.setNode("materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1639.0, g2: 1639.0},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1799.0, g2: 1799.0},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1179.0, g2: 2*1179.0},
    nextStep: 'step_5'
});

g.setNode("materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1649.0, g2: 1649.0},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1189.0, g2: 2*1189.0},
    nextStep: 'step_5'
});

g.setNode("materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1229.0, g2: 1229.0},
    nextStep: 'step_5'
});
g.setNode("materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'step_5'
});
g.setNode("materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'step_5'
});
g.setNode("materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1089.0, g2: 2*1089.0},
    nextStep: 'step_5'
});

g.setNode("materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4019.0, g2: 4019.0},
    nextStep: 'step_5'
});
g.setNode("materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4539.0, g2: 4539.0},
    nextStep: 'step_5'
});
g.setNode("materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4939.0, g2: 4939.0},
    nextStep: 'step_5'
});
g.setNode("materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3479.0, g2: 2*3479.0},
    nextStep: 'step_5'
});

g.setNode("materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3109.0, g2: 3109.0},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3439.0, g2: 3439.0},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3859.0, g2: 3859.0},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2519.0, g2: 2*2519.0},
    nextStep: 'step_5'
});

g.setNode("materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4859.0, g2: 4859.0},
    nextStep: 'step_5'
});
g.setNode("materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 5429.0, g2: 5429.0},
    nextStep: 'step_5'
});
g.setNode("materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5919.0, g2: 5919.0},
    nextStep: 'step_5'
});
g.setNode("materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*4229.0, g2: 2*4229.0},
    nextStep: 'step_5'
});

g.setNode("materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999.0, g2: 3249.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2779.0},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

g.setNode("materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2309.0, g2: 2649.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2619.0, g2: 2869.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2869.0, g2: 3129.0},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2159.0, g2: 2*2409.0},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

g.setNode("materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2629.0, g2: 2889.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2869.0, g2: 3119.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3119.0, g2: 3379.0},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2379.0, g2: 2*2619.0},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

//*******************************************88
g.setNode("bb_step_typ_materaca", {
    node: 'bb_step_typ_materaca',
    title: 'typ materac',
    label: 'wybierz typ materaca',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("bb_materac_pokrowiec", {
    label: 'W pokrowcu',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bb_materac_tapicerowany", {
    label: 'Tapicerowany',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png',

});

g.setNode("bb_materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bb_step_pokrowiec'});
g.setNode("bb_materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bb_step_tapicerowany'});

g.setNode("bb_step_pokrowiec", {
    node: 'bb_step_pokrowiec',
    title: 'materac w pokrowcu',
    label: 'wybierz materac w pokrowcu',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});
g.setNode("bb_step_tapicerowany", {
    node: 'bb_step_tapicerowany',
    title: 'materac tapicerowany',
    label: 'wybierz materac tapicerowany',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});

//*******************************************88
g.setNode("bp_step_typ_materaca", {
    node: 'bp_step_typ_materaca',
    title: 'typ materac',
    label: 'wybierz typ materaca',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("bp_materac_pokrowiec", {
    label: 'W pokrowcu',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bp_materac_tapicerowany", {
    label: 'Tapicerowany',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png',

});

g.setNode("bp_materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bp_step_pokrowiec'});
g.setNode("bp_materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bp_step_tapicerowany'});

g.setNode("bp_step_pokrowiec", {
    node: 'bp_step_pokrowiec',
    title: 'materac w pokrowcu',
    label: 'wybierz materac w pokrowcu',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});
g.setNode("bp_step_tapicerowany", {
    node: 'bp_step_tapicerowany',
    title: 'materac tapicerowany',
    label: 'wybierz materac tapicerowany',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

//********************************************

g.setNode("bb_materac_tango", {
    node: 'bb_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("bb_materac_step", {
    node: 'bb_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("bb_materac_salsa", {
    node: 'bb_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("bb_materac_chacha", {
    node: 'bb_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("bb_materac_pasodoble", {
    node: 'bb_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("bb_materac_flamenco", {
    node: 'bb_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("bb_materac_makarena", {
    node: 'bb_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips'
});
g.setNode("bb_materac_rockroll", {
    node: 'bb_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("bb_materac_foxtrot", {
    node: 'bb_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("bb_materac_melody", {
    node: 'bb_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("bb_materac_rumba", {
    node: 'bb_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott'
});
g.setNode("bb_materac_boogie", {
    node: 'bb_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new'
});
g.setNode("bb_materac_modern", {
    node: 'bb_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("bb_materac_conga", {
    node: 'bb_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("bb_materac_fandango", {
    node: 'bb_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover'
});
g.setNode("bb_materac_zorba", {
    node: 'bb_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("bb_materac_breakdance", {
    node: 'bb_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("bb_materac_funky", {
    node: 'bb_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("bb_materac_dance", {
    node: 'bb_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano'
});
g.setNode("bb_materac_lambada", {
    node: 'bb_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex'
});
g.setNode("bb_materac_electro", {
    node: 'bb_materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel'
});

g.setNode("bb_materac_foxtrot_tapicerowany", {
    node: 'bb_materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});
g.setNode("bb_materac_chacha_tapicerowany", {
    node: 'bb_materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});
g.setNode("bb_materac_flamenco_tapicerowany", {
    node: 'bb_materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7',

});


g.setNode("bb_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2189.0, g2: 2189.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2619.0, g2: 2619.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1759.0, g2: 2*1759.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 949.0, g2: 949.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1059.0, g2: 1059.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1189.0, g2: 1189.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*799.0, g2: 2*799.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2689.0, g2: 2689.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2939.0, g2: 2939.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1929.0, g2: 2*1929.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1859.0, g2: 1859.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2049.0, g2: 2049.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2289.0, g2: 2289.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1539.0, g2: 2*1539.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2339.0, g2: 2339.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2579.0, g2: 2579.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2829.0, g2: 2829.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1869.0, g2: 2*1869.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2539.0, g2: 2539.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2699.0, g2: 2699.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3159.0, g2: 3159.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2139.0, g2: 2*2139.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4179.0, g2: 4179.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4619.0, g2: 4619.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5109.0, g2: 5109.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3489.0, g2: 2*3489.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});


g.setNode("bb_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2079.0, g2: 2079.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2309.0, g2: 2309.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2529.0, g2: 2529.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1659.0, g2: 2*1659.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_foxtrot_140_200", {
    label: '140/200', width: 140,
    price: {g1: 2269.0, g2: 2269.0},
    nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_160_200", {
    label: '160/200', width: 160,
    price: {g1: 2499.0, g2: 2499.0},
    nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_180_200", {
    label: '180/200', width: 180,
    price: {g1: 2709.0, g2: 2709.0},
    nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_200_200", {
    label: '200/200', width: 200,
    price: {g1: 2*1849.0, g2: 2*1849.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'});

g.setNode("bb_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3209.0, g2: 3209.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3679.0, g2: 3679.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3929.0, g2: 3929.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2719.0, g2: 2*2719.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3699.0, g2: 4189.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4119.0, g2: 4699.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4559.0, g2: 5169.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3149.0, g2: 2*3449.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4459.0, g2: 4459.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4819.0, g2: 4819.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5309.0, g2: 5309.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3649.0, g2: 2*3649.0},
    nextStep: 'bb_nawierzchniowy'
});

g.setNode("bb_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3549.0, g2: 3549.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3969.0, g2: 3969.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4349.0, g2: 4349.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2869.0, g2: 2*2869.0},
    nextStep: 'bb_nawierzchniowy'
});

g.setNode("bb_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3259.0, g2: 3259.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3629.0, g2: 3629.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3959.0, g2: 3959.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2619.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1539.0, g2: 1539.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1699.0, g2: 1699.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1119.0, g2: 2*1119.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1639.0, g2: 1639.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1799.0, g2: 1799.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1179.0, g2: 2*1179.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1649.0, g2: 1649.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1189.0, g2: 2*1189.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1229.0, g2: 1229.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1089.0, g2: 2*1089.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4019.0, g2: 4019.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4539.0, g2: 4539.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4939.0, g2: 4939.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3479.0, g2: 2*3479.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3109.0, g2: 3109.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3439.0, g2: 3439.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3859.0, g2: 3859.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2519.0, g2: 2*2519.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4859.0, g2: 4859.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 5429.0, g2: 5429.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5919.0, g2: 5919.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*4229.0, g2: 2*4229.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999.0, g2: 3249.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2779.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2309, g2: 2649},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2619, g2: 2869},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2869, g2: 3129},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2159, g2: 2*2409},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2629.0, g2: 2889.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2869.0, g2: 3119.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3119.0, g2: 3379.0},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2379.0, g2: 2*2619.0},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

//**********************************************

g.setNode("bp_materac_tango", {
    node: 'bp_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_new_tencel_new'
});
g.setNode("bp_materac_step", {
    node: 'bp_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_silver'
});
g.setNode("bp_materac_salsa", {
    node: 'bp_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_tencel'
});
g.setNode("bp_materac_chacha", {
    node: 'bp_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_tencel_new'
});
g.setNode("bp_materac_pasodoble", {
    node: 'bp_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_tencel'
});
g.setNode("bp_materac_flamenco", {
    node: 'bp_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_tencel'
});
g.setNode("bp_materac_makarena", {
    node: 'bp_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_merced_elips'
});
g.setNode("bp_materac_rockroll", {
    node: 'bp_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_tencel_new'
});
g.setNode("bp_materac_foxtrot", {
    node: 'bp_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_hybrid'
});
g.setNode("bp_materac_melody", {
    node: 'bp_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_hybrid'
});
g.setNode("bp_materac_rumba", {
    node: 'bp_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_elips_medicott'
});
g.setNode("bp_materac_boogie", {
    node: 'bp_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_tencel_new'
});
g.setNode("bp_materac_modern", {
    node: 'bp_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_cashmere'
});
g.setNode("bp_materac_conga", {
    node: 'bp_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_cashmere'
});
g.setNode("bp_materac_fandango", {
    node: 'bp_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_medicover'
});
g.setNode("bp_materac_zorba", {
    node: 'bp_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_silver'
});
g.setNode("bp_materac_breakdance", {
    node: 'bp_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_young'
});
g.setNode("bp_materac_funky", {
    node: 'bp_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_young'
});
g.setNode("bp_materac_dance", {
    node: 'bp_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano'
});
g.setNode("bp_materac_lambada", {
    node: 'bp_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_probiotex'
});
g.setNode("bp_materac_electro", {
    node: 'bp_materac_electro',
    label: 'Electro',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_tencel'
});


g.setNode("bp_materac_foxtrot_tapicerowany", {
    node: 'bp_materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7',

});
g.setNode("bp_materac_chacha_tapicerowany", {
    node: 'bp_materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7',

});
g.setNode("bp_materac_flamenco_tapicerowany", {
    node: 'bp_materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7',

});

g.setNode("bp_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2189.0, g2: 2189.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2619.0, g2: 2619.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1759.0, g2: 2*1759.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 949.0, g2: 949.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1059.0, g2: 1059.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1189.0, g2: 1189.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*799.0, g2: 2*799.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2689.0, g2: 2689.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2939.0, g2: 2939.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1929.0, g2: 2*1929.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1859.0, g2: 1859.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2049.0, g2: 2049.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2289.0, g2: 2289.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1539.0, g2: 2*1539.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2339.0, g2: 2339.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2579.0, g2: 2579.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2829.0, g2: 2829.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1869.0, g2: 2*1869.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2539.0, g2: 2539.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2699.0, g2: 2699.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3159.0, g2: 3159.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2139.0, g2: 2*2139.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4179.0, g2: 4179.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4619.0, g2: 4619.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5109.0, g2: 5109.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3489.0, g2: 2*3489.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2079.0, g2: 2079.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2309.0, g2: 2309.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2529.0, g2: 2529.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1659.0, g2: 2*1659.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2269.0, g2: 2269.0},
    nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2499.0, g2: 2499.0},
    nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2709.0, g2: 2709.0},
    nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1849.0, g2: 2*1849.0},
    nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3209.0, g2: 3209.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3679.0, g2: 3679.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3929.0, g2: 3929.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2719.0, g2: 2*2719.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3699.0, g2: 4189.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4119.0, g2: 4699.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4559.0, g2: 5169.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3149.0, g2: 2*3449.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4459.0, g2: 4459.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4819.0, g2: 4819.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5309.0, g2: 5309.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3649.0, g2: 2*3649.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3549.0, g2: 3549.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3969.0, g2: 3969.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4349.0, g2: 4349.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2869.0, g2: 2*2869.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3259.0, g2: 3259.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3629.0, g2: 3629.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3959.0, g2: 3959.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2619.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1539.0, g2: 1539.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1699.0, g2: 1699.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1119.0, g2: 2*1119.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1639.0, g2: 1639.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1799.0, g2: 1799.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1179.0, g2: 2*1179.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1649.0, g2: 1649.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1189.0, g2: 2*1189.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1229.0, g2: 1229.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1089.0, g2: 2*1089.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4019.0, g2: 4019.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4539.0, g2: 4539.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4939.0, g2: 4939.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3479.0, g2: 2*3479.0},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3109.0, g2: 3109.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3439.0, g2: 3439.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3859.0, g2: 3859.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2519.0, g2: 2*2519.0},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4859.0, g2: 4859.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 5429.0, g2: 5429.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5919.0, g2: 5919.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*4229.0, g2: 2*4229.0},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999.0, g2: 3249.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2779.0},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});
g.setNode("bp_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2309, g2: 2649},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2619, g2: 2869},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2869, g2: 3129},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2159, g2: 2*2409},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});
g.setNode("bp_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2629.0, g2: 2889.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2869.0, g2: 3119.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3119.0, g2: 3379.0},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2379.0, g2: 2*2619.0},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});

//********************************

g.setNode("t_materac", {
    node: 't_materac',
    title: 'materac',
    label: 'wybierz materac',
    number: 4,
    zIndex: 25,
    skipToNode: 'skrzynia_posciel_big',
    optionsFilter: true,
    info: "Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych."
});

g.setNode("t_materac_tango", {
    node: 't_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new_t'
});
g.setNode("t_materac_step", {
    node: 't_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver_t'
});
g.setNode("t_materac_salsa", {
    node: 't_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel_t'
});
g.setNode("t_materac_chacha", {
    node: 't_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new_t'
});
g.setNode("t_materac_pasodoble", {
    node: 't_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel_t'
});
g.setNode("t_materac_flamenco", {
    node: 't_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new_t'
});
g.setNode("t_materac_makarena", {
    node: 't_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips_t'
});
g.setNode("t_materac_rockroll", {
    node: 't_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new_t'
});
g.setNode("t_materac_foxtrot", {
    node: 't_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid_t'
});
g.setNode("t_materac_melody", {
    node: 't_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid_t'
});
g.setNode("t_materac_rumba", {
    node: 't_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott_t'
});
g.setNode("t_materac_boogie", {
    node: 't_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new_t'
});
g.setNode("t_materac_modern", {
    node: 't_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere_t'
});
g.setNode("t_materac_conga", {
    node: 't_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere_t'
});
g.setNode("t_materac_fandango", {
    node: 't_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover_t'
});
g.setNode("t_materac_zorba", {
    node: 't_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver_t'
});
g.setNode("t_materac_breakdance", {
    node: 't_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young_t'
});
g.setNode("t_materac_funky", {
    node: 't_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young_t'
});
g.setNode("t_materac_dance", {
    node: 't_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_t'
});
g.setNode("t_materac_lambada", {
    node: 't_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex_t'
});
g.setNode("t_materac_electro", {
    node: 't_materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_t'
});

//***************************************

g.setNode("t_materac_tango_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1459, g2: 1459},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2189.0, g2: 2189.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2619.0, g2: 2619.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1759.0, g2: 2*1759.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});

g.setNode("t_materac_step_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 719.0, g2: 719.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 949.0, g2: 949.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1059.0, g2: 1059.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1189.0, g2: 1189.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*799.0, g2: 2*799.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_salsa_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1579.0, g2: 1579.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2399.0, g2: 2399.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2689.0, g2: 2689.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2939.0, g2: 2939.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1929.0, g2: 2*1929.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_chacha_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1309.0, g2: 1309.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1859.0, g2: 1859.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2049.0, g2: 2049.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2289.0, g2: 2289.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1539.0, g2: 2*1539.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_pasodoble_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1629.0, g2: 1629.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2339.0, g2: 2339.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2579.0, g2: 2579.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2829.0, g2: 2829.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1869.0, g2: 2*1869.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_flamenco_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1729.0, g2: 1729.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2539.0, g2: 2539.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2699.0, g2: 2699.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3159.0, g2: 3159.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2139.0, g2: 2*2139.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_makarena_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2789.0, g2: 2789.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4179.0, g2: 4179.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4619.0, g2: 4619.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5109.0, g2: 5109.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3489.0, g2: 2*3489.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_rockroll_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1379.0, g2: 1379.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2079.0, g2: 2079.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2309.0, g2: 2309.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2529.0, g2: 2529.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1659.0, g2: 2*1659.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_foxtrot_90_200", {
    label: '90/200', width: 90, price: {g1: 1459.0, g2: 1459.0}, nextStep: 'skrzynia_posciel_90'});
g.setNode("t_materac_foxtrot_140_200", {
    label: '140/200', width: 140, price: {g1: 2269.0, g2: 2269.0}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_160_200", {
    label: '160/200', width: 160, price: {g1: 2499.0, g2: 2499.0}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_180_200", {
    label: '180/200', width: 180, price: {g1: 2709.0, g2: 2709.0}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_200_200", {
    label: '200/200', width: 200, price: {g1: 2*1849.0, g2: 2*1849.0}, nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'});

g.setNode("t_materac_melody_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2159.0, g2: 2159.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3209.0, g2: 3209.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3679.0, g2: 3679.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3929.0, g2: 3929.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2719.0, g2: 2*2719.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_rumba_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2539.0, g2: 2809.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3699.0, g2: 4189.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4119.0, g2: 4699.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4559.0, g2: 5169.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3149.0, g2: 2*3449.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_boogie_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2989.0, g2: 2989.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4459.0, g2: 4459.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4819.0, g2: 4819.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5309.0, g2: 5309.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3649.0, g2: 2*3649.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2299.0, g2: 2299.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3549.0, g2: 3549.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3969.0, g2: 3969.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4349.0, g2: 4349.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2869.0, g2: 2*2869.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2129.0, g2: 2129.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3259.0, g2: 3259.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3629.0, g2: 3629.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3959.0, g2: 3959.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2619.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_fandango_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 939.0, g2: 939.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1539.0, g2: 1539.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1699.0, g2: 1699.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1119.0, g2: 2*1119.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_zorba_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 999.0, g2: 999.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1639.0, g2: 1639.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1799.0, g2: 1799.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1179.0, g2: 2*1179.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_breakdance_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1479.0, g2: 1479.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1649.0, g2: 1649.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1189.0, g2: 2*1189.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_funky_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1229.0, g2: 1229.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1369.0, g2: 1369.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2*null, g2: 2*null},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*1089.0, g2: 2*1089.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_dance_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2799.0, g2: 2799.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4019.0, g2: 4019.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4539.0, g2: 4539.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4939.0, g2: 4939.0},
    nextStep: 'skrzynia_posciel_big'
});

g.setNode("t_materac_lambada_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2129.0, g2: 2129.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3109.0, g2: 3109.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3439.0, g2: 3439.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3859.0, g2: 3859.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2519.0, g2: 2*2519.0},
    nextStep: 'skrzynia_posciel_big'
});

g.setNode("t_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*3479.0, g2: 2*3479.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_electro_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 3389.0, g2: 3389.0},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 4859.0, g2: 4859.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 5429.0, g2: 5429.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 5919.0, g2: 5919.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*4229.0, g2: 2*4229.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 90,
    price: {g1: 2779.0, g2: 3029.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999.0, g2: 3249.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3279.0, g2: 3529.0},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2619.0, g2: 2*2779.0},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2309, g2: 2649},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2619, g2: 2869},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2869, g2: 2870},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2159, g2: 2*2409},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2629.0, g2: 2889.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2869.0, g2: 3119.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3119.0, g2: 3379.0},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2*2379.0, g2: 2*2619.0},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});


//************************************************

g.setNode("step_5", {
    node: 'step_5',
    title: 'materac nawierzchniowy',
    label: 'wybierz materac nawierzchniowy',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true
});
g.setNode("materac_bass", {
    node: 'materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: '/materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});
g.setNode("materac_alt", {
    node: 'materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});
g.setNode("materac_tenor", {
    node: 'materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_tencel_top'
});


g.setNode("materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 749.0, g2: 749.0},
    nextStep: 'summary'
});
g.setNode("materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 829.0, g2: 829.0},
    nextStep: 'summary'
});
g.setNode("materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 909.0, g2: 909.0},
    nextStep: 'summary'
});
g.setNode("materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1249.0, g2: 1249.0},
    nextStep: 'summary'
});

g.setNode("materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 879.0, g2: 879.0},
    nextStep: 'summary'
});
g.setNode("materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 959.0, g2: 959.0},
    nextStep: 'summary'
});
g.setNode("materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1069.0, g2: 1069.0},
    nextStep: 'summary'
});
g.setNode("materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1439.0, g2: 1439.0},
    nextStep: 'summary'
});
g.setNode("materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 659.0, g2: 659.0},
    nextStep: 'summary'
});
g.setNode("materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 709.0, g2: 709.0},
    nextStep: 'summary'
});
g.setNode("materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 789.0, g2: 789.0},
    nextStep: 'summary'
});
g.setNode("materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1019.0, g2: 1019.0},
    nextStep: 'summary'
});


//***************************************************************

g.setNode("bb_nawierzchniowy", {
    node: 'bb_nawierzchniowy',
    title: 'materac nawierzchniowy',
    label: 'wybierz materac nawierzchniowy',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

g.setNode("bb_materac_bass", {
    node: 'bb_materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});

g.setNode("bb_materac_alt", {
    node: 'bb_materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});


g.setNode("bb_materac_tenor", {
    node: 'bb_materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_tencel_top'
});


g.setNode("bb_materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 749.0, g2: 749.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 829.0, g2: 829.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 909.0, g2: 909.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1249.0, g2: 1249.0},
    nextStep: 'summary',
});

g.setNode("bb_materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 879.0, g2: 879.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 959.0, g2: 959.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1069.0, g2: 1069.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1439.0, g2: 1439.0},
    nextStep: 'summary',
});

g.setNode("bb_materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 659.0, g2: 659.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 709.0, g2: 709.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 789.0, g2: 789.0},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1019.0, g2: 1019.0},
    nextStep: 'summary',
});

//******************************************************

g.setNode("bp_nawierzchniowy", {
    node: 'bp_nawierzchniowy',
    title: 'materac nawierzchniowy',
    label: 'wybierz materac nawierzchniowy',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Wizualizacja prezentuje przykładowy model materaca w rozmiarze 160 x 200 cm. Prezentowane kolory tkanin mogą odbiegać od kolorów rzeczywistych.'
});

g.setNode("bp_materac_bass", {
    node: 'bp_materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_cashmere_tencel_top'
});

g.setNode("bp_materac_alt", {
    node: 'bp_materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_cashmere_tencel_top'
});


g.setNode("bp_materac_tenor", {
    node: 'bp_materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_tencel_top'
});


g.setNode("bp_materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 749.0, g2: 749.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 829.0, g2: 829.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 909.0, g2: 909.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1249.0, g2: 1249.0},
    nextStep: 'summary'
});

g.setNode("bp_materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 879.0, g2: 879.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 959.0, g2: 959.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1069.0, g2: 1069.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1439.0, g2: 1439.0},
    nextStep: 'summary'
});

g.setNode("bp_materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 659.0, g2: 659.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 709.0, g2: 709.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 789.0, g2: 789.0},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1019.0, g2: 1019.0},
    nextStep: 'summary'
});


g.setNode("step_6", {
    node: 'step_6',
    title: 'otomana',
    label: 'wybierz otomanę',
    number: 5,
    zIndex: 35,
    skipToNode: 'summary',
    colors: 'colors_7',
    optionsFilter: false
});

g.setNode("otomana", {
    label: 'Otomana',
    img: 'otomany.png',
    render: 'transparent.png'
});

g.setNode("otomana_140", {label: '140/200', price: {g1: 1957, g2: 2288}, nextStep: 'summary'});
g.setNode("otomana_160", {label: '160/200', price: {g1: 2096, g2: 2599}, nextStep: 'summary'});
g.setNode("otomana_180", {label: '180/200', price: {g1: 2352, g2: 2673}, nextStep: 'summary'});


g.setNode("skrzynia_posciel_big", {
    node: 'skrzynia_posciel_big',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'frame_no_box_big',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_big_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("skrzynia_posciel_big_90_yes", {label: 'TAK',width: 90, price: {g1: 169, g2: 169}, nextStep: 'frame_with_box_90'});
g.setNode("skrzynia_posciel_big_140_yes", {label: 'TAK',width: 140, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_160_yes", {label: 'TAK',width: 160, price: {g1: 339, g2: 339}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_180_yes", {label: 'TAK',width: 180, price: {g1: 359, g2: 359}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_200_yes", {label: 'TAK',width: 200, price: {g1: 409, g2: 409}, nextStep: 'frame_with_box'});

g.setNode("skrzynia_posciel_big_90_no", {label: 'NIE',width: 90, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_90'});
g.setNode("skrzynia_posciel_big_140_no", {label: 'NIE',width: 140, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_160_no", {label: 'NIE',width: 160, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_180_no", {label: 'NIE',width: 180, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_200_no", {label: 'NIE',width: 200, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});

g.setNode("skrzynia_posciel_small", {
    node: 'skrzynia_posciel_small',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'frame_no_box_big',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_small_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("skrzynia_posciel_90", {
    node: 'skrzynia_posciel_90',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'frame_no_box_90',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_90_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});


g.setNode("skrzynia_posciel_small_90_yes", {label: 'TAK',width: 90, price: {g1: 169, g2: 169}, nextStep: 'frame_with_box_90'});
g.setNode("skrzynia_posciel_small_140_yes", {label: 'TAK',width: 140, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_160_yes", {label: 'TAK',width: 160, price: {g1: 339, g2: 339}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_180_yes", {label: 'TAK',width: 180, price: {g1: 359, g2: 359}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_200_yes", {label: 'TAK',width: 200, price: {g1: 409, g2: 409}, nextStep: 'frame_with_box'});

g.setNode("skrzynia_posciel_small_90_no", {label: 'NIE',width: 90, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_90'});
g.setNode("skrzynia_posciel_small_140_no", {label: 'NIE',width: 140, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_160_no", {label: 'NIE',width: 160, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_180_no", {label: 'NIE',width: 180, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_200_no", {label: 'NIE',width: 200, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});

g.setEdge("skrzynia_posciel_big", "skrzynia_posciel_big_price");

g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_90_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_140_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_160_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_180_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_200_yes");

g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_90_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_140_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_160_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_180_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_200_no");

g.setEdge("skrzynia_posciel_small", "skrzynia_posciel_small_price");

g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_90_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_140_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_160_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_180_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_200_yes");

g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_90_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_140_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_160_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_180_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_200_no");

g.setEdge("skrzynia_posciel_90", "skrzynia_posciel_90_price");
g.setEdge("skrzynia_posciel_90_price", "skrzynia_posciel_big_90_yes");
g.setEdge("skrzynia_posciel_90_price", "skrzynia_posciel_big_90_no");

g.setNode("skrzynia_posciel_urban", {
    node: 'skrzynia_posciel_big',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'frame_no_box_big',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_urban", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("frame", {
    node: 'frame',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});


g.setNode("frame_with_box", {
    node: 'frame_with_box',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_with_box_90", {
    node: 'frame_with_box_90',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_family_expert", {
    label: 'Family Expert',
    img: '/stelaze/family_expert.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_double_lift", {
    label: 'Double lift',
    img: '/stelaze/double_lift.jpg',
    render: 'ramiak.png',
});


g.setNode("frame_lift_90", {label: '90/200',width: 90, price: {g1: 589, g2: 589}, nextStep: 'summary'});
g.setNode("frame_lift_140", {label: '140/200',width: 140, price: {g1: 2*579, g2: 2*579}, nextStep: 'summary'});
g.setNode("frame_lift_160", {label: '160/200',width: 160, price: {g1: 2*579, g2: 2*579}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_lift_180", {label: '180/200',width: 180, price: {g1: 2*589, g2: 2*589}, nextStep: 'summary', extra: '*(2x 90/200)'});
g.setNode("frame_lift_200", {label: '200/200',width: 200, price: {g1: 2*599, g2: 2*599}, nextStep: 'summary', extra: '*(2x 100/200)'});

g.setNode("frame_double_lift_140", {label: '140/200',width: 140, price: {g1: 849, g2: 849}, nextStep: 'summary'});
g.setNode("frame_double_lift_160", {label: '160/200',width: 160, price: {g1: 869, g2: 869}, nextStep: 'summary'});
g.setNode("frame_double_lift_180", {label: '180/200',width: 180, price: {g1: 939, g2: 939}, nextStep: 'summary'});
g.setNode("frame_double_lift_200", {label: '200/200',width: 200, price: {g1: 999, g2: 999}, nextStep: 'summary'});


g.setEdge("frame_with_box", "frame_family_expert");
g.setEdge("frame_with_box", "frame_family_classic");
g.setEdge("frame_with_box", "frame_double_lift");

g.setEdge("frame_family_expert", "frame_family_expert_90");
g.setEdge("frame_family_expert", "frame_family_expert_140");
g.setEdge("frame_family_expert", "frame_family_expert_160");
g.setEdge("frame_family_expert", "frame_family_expert_180");
g.setEdge("frame_family_expert", "frame_family_expert_200");

g.setEdge("frame_family_classic", "frame_family_classic_90");
g.setEdge("frame_family_classic", "frame_family_classic_140");
g.setEdge("frame_family_classic", "frame_family_classic_160");
g.setEdge("frame_family_classic", "frame_family_classic_180");
g.setEdge("frame_family_classic", "frame_family_classic_200");

g.setEdge("frame_lift", "frame_lift_90");
g.setEdge("frame_lift", "frame_lift_140");
g.setEdge("frame_lift", "frame_lift_160");
g.setEdge("frame_lift", "frame_lift_180");
g.setEdge("frame_lift", "frame_lift_200");

g.setEdge("frame_double_lift", "frame_double_lift_140");
g.setEdge("frame_double_lift", "frame_double_lift_160");
g.setEdge("frame_double_lift", "frame_double_lift_180");
g.setEdge("frame_double_lift", "frame_double_lift_200");

g.setNode("frame_no_box_big", {
    node: 'frame_no_box_big',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_no_box", {
    node: 'frame_no_box',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_no_box_90", {
    node: 'frame_no_box_90',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_family_expert", {
    label: 'Family Expert',
    img: '/stelaze/family_expert.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_moto", {
    label: 'Family moto',
    img: '/stelaze/family_moto.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_expert", {
    label: 'Select expert',
    img: '/stelaze/select_expert.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_moto", {
    label: 'Select moto',
    img: '/stelaze/select_moto.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_classic", {
    label: 'Family classic',
    img: '/stelaze/family_classic.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_classic", {
    label: 'Select classic',
    img: '/stelaze/select_classic.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_sam", {
    label: 'Stelaż sam',
    img: '/stelaze/stelaz_sam.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_expert", {
    label: 'Family Expert',
    img: '/stelaze/family_expert.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_double_lift", {
    label: 'Double lift',
    img: '/stelaze/double_lift.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_lift", {
    label: 'Lift',
    img: '/stelaze/family_lift.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_family_expert_90", {label: '90/200',width: 90, price: {g1: 489, g2: 489}, nextStep: 'summary'});
g.setNode("frame_family_expert_140", {label: '140/200',width: 140, price: {g1: 669, g2: 669}, nextStep: 'summary'});
g.setNode("frame_family_expert_160", {label: '160/200',width: 160, price: {g1: 2*459, g2: 2*459}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_family_expert_180", {label: '180/200',width: 180, price: {g1: 2*489, g2: 2*489}, nextStep: 'summary', extra: '*(2x 90/200)'});
g.setNode("frame_family_expert_200", {label: '200/200',width: 200, price: {g1: 2*499, g2: 2*499}, nextStep: 'summary', extra: '*(2x 100/200)'});

g.setNode("frame_family_moto_90", {label: '90/200',width: 90, price: {g1: 1529, g2: 1529}, nextStep: 'summary'});
g.setNode("frame_family_moto_160", {label: '160/200',width: 160, price: {g1: 2*1489, g2: 2*1489}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_family_moto_180", {label: '180/200',width: 180, price: {g1: 2*1529, g2: 2*1529}, nextStep: 'summary', extra: '*(2x 90/200)'});
g.setNode("frame_family_moto_200", {label: '200/200',width: 200, price: {g1: 2*1629, g2: 2*1629}, nextStep: 'summary', extra: '*(2x 100/200)'});

g.setNode("frame_family_classic_90", {label: '90/200',width: 90, price: {g1: 309, g2: 309}, nextStep: 'summary'});
g.setNode("frame_family_classic_140", {label: '140/200',width: 140, price: {g1: 479, g2: 479}, nextStep: 'summary'});
g.setNode("frame_family_classic_160", {label: '160/200',width: 160, price: {g1: 2*299, g2: 2*299}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_family_classic_180", {label: '180/200',width: 180, price: {g1: 2*309, g2: 2*309}, nextStep: 'summary', extra: '*(2x 90/200)'});
g.setNode("frame_family_classic_200", {label: '200/200',width: 200, price: {g1: 2*329, g2: 2*329}, nextStep: 'summary', extra: '*(2x 100/200)'});

g.setNode("frame_select_expert_90", {label: '90/200',width: 90, price: {g1: 909, g2: 909}, nextStep: 'summary'});
g.setNode("frame_select_expert_160", {label: '160/200',width: 160, price: {g1: 2*879, g2: 2*879}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_select_expert_180", {label: '180/200',width: 180, price: {g1: 2*909, g2: 2*909}, nextStep: 'summary', extra: '*(2x 90/200)'});

g.setNode("frame_select_moto_90", {label: '90/200',width: 90, price: {g1: 2559, g2: 2559}, nextStep: 'summary'});
g.setNode("frame_select_moto_160", {label: '160/200',width: 160, price: {g1: 2*2499, g2: 2*2499}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_select_moto_180", {label: '180/200',width: 180, price: {g1: 2*2559, g2: 2*2559}, nextStep: 'summary', extra: '*(2x 90/200)'});

g.setNode("frame_select_classic_90", {label: '90/200',width: 90, price: {g1: 639, g2: 639}, nextStep: 'summary'});
g.setNode("frame_select_classic_160", {label: '160/200',width: 160, price: {g1: 2*619, g2: 2*619}, nextStep: 'summary', extra: '*(2x 80/200)'});
g.setNode("frame_select_classic_180", {label: '180/200',width: 180, price: {g1: 2*639, g2: 2*639}, nextStep: 'summary', extra: '*(2x 90/200)'});

g.setNode("frame_sam_90", {label: '90/200',width: 90, price: {g1: 209, g2: 209}, nextStep: 'summary'});
g.setNode("frame_sam_140", {label: '140/200',width: 140, price: {g1: 299, g2: 299}, nextStep: 'summary'});
g.setNode("frame_sam_160", {label: '160/200',width: 160, price: {g1: 359, g2: 359}, nextStep: 'summary'});

g.setEdge("frame_no_box", "frame_sam");
g.setEdge("frame_no_box", "frame_family_classic");
g.setEdge("frame_no_box", "frame_family_expert");
g.setEdge("frame_no_box", "frame_family_moto");
g.setEdge("frame_no_box", "frame_select_classic");
g.setEdge("frame_no_box", "frame_select_expert");
g.setEdge("frame_no_box", "frame_select_moto");
g.setEdge("frame_no_box", "frame_lift");
g.setEdge("frame_no_box", "frame_double_lift");


g.setEdge("frame_no_box_90", "frame_sam");
g.setEdge("frame_no_box_90", "frame_family_classic");
g.setEdge("frame_no_box_90", "frame_family_expert");
g.setEdge("frame_no_box_90", "frame_family_moto");
g.setEdge("frame_no_box_90", "frame_select_classic");
g.setEdge("frame_no_box_90", "frame_select_expert");
g.setEdge("frame_no_box_90", "frame_select_moto");
g.setEdge("frame_no_box_90", "frame_lift");


g.setEdge("frame", "frame_sam");
g.setEdge("frame", "frame_family_classic");
g.setEdge("frame", "frame_family_expert");
g.setEdge("frame", "frame_family_moto");
g.setEdge("frame", "frame_select_classic");
g.setEdge("frame", "frame_select_expert");
g.setEdge("frame", "frame_select_moto");
g.setEdge("frame", "frame_lift");
g.setEdge("frame", "frame_double_lift");

g.setEdge("frame_no_box_big", "frame_sam");
g.setEdge("frame_no_box_big", "frame_family_classic");
g.setEdge("frame_no_box_big", "frame_family_expert");
g.setEdge("frame_no_box_big", "frame_family_moto");
g.setEdge("frame_no_box_big", "frame_select_classic");
g.setEdge("frame_no_box_big", "frame_select_expert");
g.setEdge("frame_no_box_big", "frame_select_moto");
g.setEdge("frame_no_box_big", "frame_double_lift");

g.setEdge("frame_family_expert", "frame_family_expert_140");
g.setEdge("frame_family_expert", "frame_family_expert_160");
g.setEdge("frame_family_expert", "frame_family_expert_180");
g.setEdge("frame_family_expert", "frame_family_expert_200");

g.setEdge("frame_family_moto", "frame_family_moto_90");
g.setEdge("frame_family_moto", "frame_family_moto_160");
g.setEdge("frame_family_moto", "frame_family_moto_180");
g.setEdge("frame_family_moto", "frame_family_moto_200");

g.setEdge("frame_family_classic", "frame_family_classic_90");
g.setEdge("frame_family_classic", "frame_family_classic_140");
g.setEdge("frame_family_classic", "frame_family_classic_160");
g.setEdge("frame_family_classic", "frame_family_classic_180");
g.setEdge("frame_family_classic", "frame_family_classic_200");

g.setEdge("frame_select_expert", "frame_select_expert_90");
g.setEdge("frame_select_expert", "frame_select_expert_160");
g.setEdge("frame_select_expert", "frame_select_expert_180");

g.setEdge("frame_select_moto", "frame_select_moto_90");
g.setEdge("frame_select_moto", "frame_select_moto_160");
g.setEdge("frame_select_moto", "frame_select_moto_180");

g.setEdge("frame_select_classic", "frame_select_classic_90");
g.setEdge("frame_select_classic", "frame_select_classic_160");
g.setEdge("frame_select_classic", "frame_select_classic_180");

g.setEdge("frame_sam", "frame_sam_90");
g.setEdge("frame_sam", "frame_sam_140");
g.setEdge("frame_sam", "frame_sam_160");

g.setNode("frame_no_box_small", {
    node: 'frame_no_box_small',
    title: 'Stelaż',
    label: 'wybierz stelaż',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setEdge("frame_no_box_small", "frame_sam");
g.setEdge("frame_no_box_small", "frame_family_classic");
g.setEdge("frame_no_box_small", "frame_family_expert");
g.setEdge("frame_no_box_small", "frame_family_moto");
g.setEdge("frame_no_box_small", "frame_select_classic");
g.setEdge("frame_no_box_small", "frame_select_expert");
g.setEdge("frame_no_box_small", "frame_select_moto");
g.setEdge("frame_no_box_small", "frame_lift");
g.setEdge("frame_no_box_small", "frame_double_lift");

g.setEdge("frame_with_box_90", "frame_family_expert");



g.setNode("otomana_140", {label: '140/200', price: {g1: 1599, g2: 1849}, nextStep: 'summary'});
g.setNode("otomana_160", {label: '160/200', price: {g1: 1699, g2: 2099}, nextStep: 'summary'});
g.setNode("otomana_180", {label: '180/200', price: {g1: 1899, g2: 2169}, nextStep: 'summary'});

//-------------------------------

g.setEdge("loadLevel", "step_1");

g.setEdge("step_1", "baza_tapicerowana");
g.setEdge("step_1", "base_box");
g.setEdge("step_1", "box_podnoszony");
g.setEdge("step_1", "baza_kontynentalna");
g.setEdge("step_1", "baza_kontynentalna_z_szuflada");

g.setEdge("base_box", "base_box_140_200");
g.setEdge("base_box", "base_box_160_200");
g.setEdge("base_box", "base_box_180_200");
g.setEdge("base_box", "base_box_200_200");

g.setEdge("baza_kontynentalna", "baza_kontynentalna_140_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_160_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_180_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_200_200");

g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_140_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_160_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_180_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_200_200");

g.setEdge("baza_tapicerowana", "baza_tapicerowana_90_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_140_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_160_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_180_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_200_200");

g.setEdge("box_podnoszony", "box_podnoszony_140_200");
g.setEdge("box_podnoszony", "box_podnoszony_160_200");
g.setEdge("box_podnoszony", "box_podnoszony_180_200");
g.setEdge("box_podnoszony", "box_podnoszony_200_200");


g.setEdge("kontynent_colors_7", "kontynent_novel");
g.setEdge("kontynent_colors_7", "kontynent_roko");
g.setEdge("kontynent_colors_7", "kontynent_eren");
g.setEdge("kontynent_colors_7", "kontynent_ontario");
g.setEdge("kontynent_colors_7", "kontynent_riviera");

g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_novel");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_roko");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_eren");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_ontario");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_riviera");

g.setEdge("base_box_colors_7", "base_box_novel");
g.setEdge("base_box_colors_7", "base_box_roko");
g.setEdge("base_box_colors_7", "base_box_eren");
g.setEdge("base_box_colors_7", "base_box_ontario");
g.setEdge("base_box_colors_7", "base_box_riviera");

g.setEdge("base_podnoszony_colors_7", "base_podnoszony_novel");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_roko");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_eren");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_ontario");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_riviera");

g.setEdge("tapicerowana_colors_7", "tapicerowana_novel");
g.setEdge("tapicerowana_colors_7", "tapicerowana_roko");
g.setEdge("tapicerowana_colors_7", "tapicerowana_eren");
g.setEdge("tapicerowana_colors_7", "tapicerowana_ontario");
g.setEdge("tapicerowana_colors_7", "tapicerowana_riviera");

g.setEdge("urban_colors_7", "urban_novel");
g.setEdge("urban_colors_7", "urban_roko");
g.setEdge("urban_colors_7", "urban_eren");
g.setEdge("urban_colors_7", "urban_ontario");
g.setEdge("urban_colors_7", "urban_riviera");

g.setEdge("preppy_colors_7", "preppy_novel");
g.setEdge("preppy_colors_7", "preppy_roko");
g.setEdge("preppy_colors_7", "preppy_eren");
g.setEdge("preppy_colors_7", "preppy_ontario");
g.setEdge("preppy_colors_7", "preppy_riviera");

g.setEdge("glamour_colors_7", "glamour_novel");
g.setEdge("glamour_colors_7", "glamour_roko");
g.setEdge("glamour_colors_7", "glamour_eren");
g.setEdge("glamour_colors_7", "glamour_ontario");
g.setEdge("glamour_colors_7", "glamour_riviera");

g.setEdge("vintage_colors_7", "vintage_novel");
g.setEdge("vintage_colors_7", "vintage_roko");
g.setEdge("vintage_colors_7", "vintage_eren");
g.setEdge("vintage_colors_7", "vintage_ontario");
g.setEdge("vintage_colors_7", "vintage_riviera");

g.setEdge("eclectic_colors_7", "eclectic_novel");
g.setEdge("eclectic_colors_7", "eclectic_roko");
g.setEdge("eclectic_colors_7", "eclectic_eren");
g.setEdge("eclectic_colors_7", "eclectic_ontario");
g.setEdge("eclectic_colors_7", "eclectic_riviera");

g.setEdge("ladylike_colors_7", "ladylike_novel");
g.setEdge("ladylike_colors_7", "ladylike_roko");
g.setEdge("ladylike_colors_7", "ladylike_eren");
g.setEdge("ladylike_colors_7", "ladylike_ontario");
g.setEdge("ladylike_colors_7", "ladylike_riviera");

g.setEdge("momiko_colors_7", "momiko_novel");
g.setEdge("momiko_colors_7", "momiko_roko");
g.setEdge("momiko_colors_7", "momiko_eren");
g.setEdge("momiko_colors_7", "momiko_ontario");
g.setEdge("momiko_colors_7", "momiko_riviera");

//********************************

g.setEdge("urban_colors_7_170", "urban_novel_170");
g.setEdge("urban_colors_7_170", "urban_roko_170");
g.setEdge("urban_colors_7_170", "urban_aspen_170");
g.setEdge("urban_colors_7_170", "urban_river_170");
g.setEdge("urban_colors_7_170", "urban_eren_170");
g.setEdge("urban_colors_7_170", "urban_ontario_170");
g.setEdge("urban_colors_7_170", "urban_riviera_170");

g.setEdge("preppy_colors_7_170", "preppy_novel_170");
g.setEdge("preppy_colors_7_170", "preppy_roko_170");
g.setEdge("preppy_colors_7_170", "preppy_aspen_170");
g.setEdge("preppy_colors_7_170", "preppy_river_170");
g.setEdge("preppy_colors_7_170", "preppy_eren_170");
g.setEdge("preppy_colors_7_170", "preppy_ontario_170");
g.setEdge("preppy_colors_7_170", "preppy_riviera_170");

g.setEdge("glamour_colors_7_170", "glamour_novel_170");
g.setEdge("glamour_colors_7_170", "glamour_roko_170");
g.setEdge("glamour_colors_7_170", "glamour_aspen_170");
g.setEdge("glamour_colors_7_170", "glamour_river_170");
g.setEdge("glamour_colors_7_170", "glamour_eren_170");
g.setEdge("glamour_colors_7_170", "glamour_ontario_170");
g.setEdge("glamour_colors_7_170", "glamour_riviera_170");

g.setEdge("vintage_colors_7_170", "vintage_novel_170");
g.setEdge("vintage_colors_7_170", "vintage_roko_170");
g.setEdge("vintage_colors_7_170", "vintage_aspen_170");
g.setEdge("vintage_colors_7_170", "vintage_river_170");
g.setEdge("vintage_colors_7_170", "vintage_eren_170");
g.setEdge("vintage_colors_7_170", "vintage_ontario_170");
g.setEdge("vintage_colors_7_170", "vintage_riviera_170");

g.setEdge("eclectic_colors_7_170", "eclectic_novel_170");
g.setEdge("eclectic_colors_7_170", "eclectic_roko_170");
g.setEdge("eclectic_colors_7_170", "eclectic_aspen_170");
g.setEdge("eclectic_colors_7_170", "eclectic_river_170");
g.setEdge("eclectic_colors_7_170", "eclectic_eren_170");
g.setEdge("eclectic_colors_7_170", "eclectic_ontario_170");
g.setEdge("eclectic_colors_7_170", "eclectic_riviera_170");

g.setEdge("ladylike_colors_7_170", "ladylike_novel_170");
g.setEdge("ladylike_colors_7_170", "ladylike_roko_170");
g.setEdge("ladylike_colors_7_170", "ladylike_aspen_170");
g.setEdge("ladylike_colors_7_170", "ladylike_river_170");
g.setEdge("ladylike_colors_7_170", "ladylike_eren_170");
g.setEdge("ladylike_colors_7_170", "ladylike_ontario_170");
g.setEdge("ladylike_colors_7_170", "ladylike_riviera_170");

g.setEdge("momiko_colors_7_170", "momiko_novel_170");
g.setEdge("momiko_colors_7_170", "momiko_roko_170");
g.setEdge("momiko_colors_7_170", "momiko_aspen_170");
g.setEdge("momiko_colors_7_170", "momiko_river_170");
g.setEdge("momiko_colors_7_170", "momiko_eren_170");
g.setEdge("momiko_colors_7_170", "momiko_ontario_170");
g.setEdge("momiko_colors_7_170", "momiko_riviera_170");



//*********************************

g.setEdge("m_tap_colors_7", "m_tap_novel");
g.setEdge("m_tap_colors_7", "m_tap_roko");
g.setEdge("m_tap_colors_7", "m_tap_eren");
g.setEdge("m_tap_colors_7", "m_tap_ontario");
g.setEdge("m_tap_colors_7", "m_tap_riviera");

//***********************************

g.setEdge("bp_tap_colors_7", "bp_tap_novel");
g.setEdge("bp_tap_colors_7", "bp_tap_roko");
g.setEdge("bp_tap_colors_7", "bp_tap_eren");
g.setEdge("bp_tap_colors_7", "bp_tap_ontario");
g.setEdge("bp_tap_colors_7", "bp_tap_riviera");

//***********************************

g.setEdge("step_2", "urban");
g.setEdge("step_2", "preppy");
g.setEdge("step_2", "glamour");
g.setEdge("step_2", "vintage");
g.setEdge("step_2", "eclectic");
g.setEdge("step_2", "ladylike");
g.setEdge("step_2", "momiko");

g.setEdge("bb_wezglowie", "bb_wezglowie_urban");
g.setEdge("bb_wezglowie", "bb_wezglowie_preppy");
g.setEdge("bb_wezglowie", "bb_wezglowie_glamour");
g.setEdge("bb_wezglowie", "bb_wezglowie_vintage");
g.setEdge("bb_wezglowie", "bb_wezglowie_eclectic");
g.setEdge("bb_wezglowie", "bb_wezglowie_ladylike");
g.setEdge("bb_wezglowie", "bb_wezglowie_momiko");

//**************************************

g.setEdge("bp_wezglowie", "bp_wezglowie_urban");
g.setEdge("bp_wezglowie", "bp_wezglowie_preppy");
g.setEdge("bp_wezglowie", "bp_wezglowie_glamour");
g.setEdge("bp_wezglowie", "bp_wezglowie_vintage");
g.setEdge("bp_wezglowie", "bp_wezglowie_eclectic");
g.setEdge("bp_wezglowie", "bp_wezglowie_ladylike");
g.setEdge("bp_wezglowie", "bp_wezglowie_momiko");

//**************************************

g.setEdge("t_wezglowie_90", "t_wezglowie_urban");
g.setEdge("t_wezglowie", "t_wezglowie_urban");
g.setEdge("t_wezglowie", "t_wezglowie_preppy");
g.setEdge("t_wezglowie", "t_wezglowie_glamour");
g.setEdge("t_wezglowie", "t_wezglowie_vintage");
g.setEdge("t_wezglowie", "t_wezglowie_eclectic");
g.setEdge("t_wezglowie", "t_wezglowie_ladylike");
g.setEdge("t_wezglowie", "t_wezglowie_momiko");

//**************************************

g.setEdge("urban", "urban_140_115");
g.setEdge("urban", "urban_160_115");
g.setEdge("urban", "urban_180_115");
g.setEdge("urban", "urban_200_115");

g.setEdge("urban", "urban_140_95");
g.setEdge("urban", "urban_160_95");
g.setEdge("urban", "urban_180_95");
g.setEdge("urban", "urban_200_95");

g.setEdge("preppy", "preppy_140_115");
g.setEdge("preppy", "preppy_160_115");
g.setEdge("preppy", "preppy_180_115");
g.setEdge("preppy", "preppy_200_115");

g.setEdge("preppy", "preppy_140_95");
g.setEdge("preppy", "preppy_160_95");
g.setEdge("preppy", "preppy_180_95");
g.setEdge("preppy", "preppy_200_95");

g.setEdge("glamour", "glamour_140_115");
g.setEdge("glamour", "glamour_160_115");
g.setEdge("glamour", "glamour_180_115");
g.setEdge("glamour", "glamour_200_115");

g.setEdge("vintage", "vintage_140_115");
g.setEdge("vintage", "vintage_160_115");
g.setEdge("vintage", "vintage_180_115");
g.setEdge("vintage", "vintage_200_115");

g.setEdge("vintage", "vintage_140_95");
g.setEdge("vintage", "vintage_160_95");
g.setEdge("vintage", "vintage_180_95");
g.setEdge("vintage", "vintage_200_95");

g.setEdge("momiko", "momiko_140_115");
g.setEdge("momiko", "momiko_160_115");
g.setEdge("momiko", "momiko_180_115");
g.setEdge("momiko", "momiko_200_115");

g.setEdge("momiko", "momiko_140_95");
g.setEdge("momiko", "momiko_160_95");
g.setEdge("momiko", "momiko_180_95");
g.setEdge("momiko", "momiko_200_95");

g.setEdge("eclectic", "eclectic_140_115");
g.setEdge("eclectic", "eclectic_160_115");
g.setEdge("eclectic", "eclectic_180_115");
g.setEdge("eclectic", "eclectic_200_115");

g.setEdge("eclectic", "eclectic_140_95");
g.setEdge("eclectic", "eclectic_160_95");
g.setEdge("eclectic", "eclectic_180_95");
g.setEdge("eclectic", "eclectic_200_95");

g.setEdge("ladylike", "ladylike_140_115");
g.setEdge("ladylike", "ladylike_160_115");
g.setEdge("ladylike", "ladylike_180_115");
g.setEdge("ladylike", "ladylike_200_115");

//**************************************************

g.setEdge("bb_wezglowie_urban", "bb_urban_140_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_160_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_180_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_200_95");

g.setEdge("bb_wezglowie_urban", "bb_urban_140_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_160_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_180_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_200_115");

g.setEdge("bb_wezglowie_preppy", "bb_preppy_140_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_160_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_180_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_200_95");

g.setEdge("bb_wezglowie_preppy", "bb_preppy_140_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_160_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_180_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_200_115");

g.setEdge("bb_wezglowie_glamour", "bb_glamour_140_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_160_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_180_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_200_115");

g.setEdge("bb_wezglowie_vintage", "bb_vintage_140_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_160_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_180_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_200_95");

g.setEdge("bb_wezglowie_vintage", "bb_vintage_140_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_160_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_180_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_200_115");

g.setEdge("bb_wezglowie_momiko", "bb_momiko_140_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_160_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_180_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_200_95");

g.setEdge("bb_wezglowie_momiko", "bb_momiko_140_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_160_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_180_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_200_115");

g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_140_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_160_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_180_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_200_95");

g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_140_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_160_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_180_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_200_115");

g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_140_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_160_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_180_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_200_115");

//*****************************************************

g.setEdge("bp_wezglowie_urban", "bp_urban_140_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_160_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_180_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_200_95");

g.setEdge("bp_wezglowie_urban", "bp_urban_140_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_160_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_180_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_200_115");

g.setEdge("bp_wezglowie_preppy", "bp_preppy_140_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_160_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_180_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_200_95");

g.setEdge("bp_wezglowie_preppy", "bp_preppy_140_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_160_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_180_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_200_115");

g.setEdge("bp_wezglowie_glamour", "bp_glamour_140_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_160_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_180_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_200_115");

g.setEdge("bp_wezglowie_vintage", "bp_vintage_140_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_160_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_180_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_200_95");

g.setEdge("bp_wezglowie_vintage", "bp_vintage_140_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_160_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_180_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_200_115");

g.setEdge("bp_wezglowie_momiko", "bp_momiko_140_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_160_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_180_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_200_95");

g.setEdge("bp_wezglowie_momiko", "bp_momiko_140_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_160_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_180_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_200_115");

g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_140_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_160_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_180_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_200_95");

g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_140_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_160_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_180_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_200_115");

g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_140_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_160_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_180_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_200_115");

//*****************************************************

g.setEdge("t_wezglowie_urban", "t_urban_90_95");
g.setEdge("t_wezglowie_urban", "t_urban_140_95");
g.setEdge("t_wezglowie_urban", "t_urban_160_95");
g.setEdge("t_wezglowie_urban", "t_urban_180_95");
g.setEdge("t_wezglowie_urban", "t_urban_200_95");

g.setEdge("t_wezglowie_urban", "t_urban_90_115");
g.setEdge("t_wezglowie_urban", "t_urban_140_115");
g.setEdge("t_wezglowie_urban", "t_urban_160_115");
g.setEdge("t_wezglowie_urban", "t_urban_180_115");
g.setEdge("t_wezglowie_urban", "t_urban_200_115");

g.setEdge("t_wezglowie_preppy", "t_preppy_140_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_160_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_180_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_200_95");

g.setEdge("t_wezglowie_preppy", "t_preppy_140_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_160_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_180_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_200_115");

g.setEdge("t_wezglowie_glamour", "t_glamour_140_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_160_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_180_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_200_115");

g.setEdge("t_wezglowie_vintage", "t_vintage_140_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_160_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_180_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_200_95");

g.setEdge("t_wezglowie_vintage", "t_vintage_140_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_160_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_180_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_200_115");

g.setEdge("t_wezglowie_momiko", "t_momiko_140_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_160_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_180_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_200_95");

g.setEdge("t_wezglowie_momiko", "t_momiko_140_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_160_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_180_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_200_115");

g.setEdge("t_wezglowie_eclectic", "t_eclectic_140_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_160_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_180_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_200_95");

g.setEdge("t_wezglowie_eclectic", "t_eclectic_140_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_160_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_180_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_200_115");

g.setEdge("t_wezglowie_ladylike", "t_ladylike_140_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_160_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_180_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_200_115");

//****************************

g.setEdge("legs", "stozek_owal_buk");
g.setEdge("legs", "stozek_owal_dab");
g.setEdge("legs", "stozek_owal_wenge");
g.setEdge("legs", "stozek_kwadrat_buk");
g.setEdge("legs", "stozek_kwadrat_dab");
g.setEdge("legs", "stozek_kwadrat_wenge");
g.setEdge("legs", "stozek_skos_buk");
g.setEdge("legs", "stozek_skos_dab");
g.setEdge("legs", "stozek_skos_wenge");
g.setEdge("legs", "stozek_ze_stopka_czern");
g.setEdge("legs", "stozek_ze_stopka_miedz");
g.setEdge("legs", "stozek_ze_stopka_srebro");
g.setEdge("legs", "trojkat_prosty_czern");
g.setEdge("legs", "trojkat_prosty_miedz");
g.setEdge("legs", "trojkat_prosty_srebro");
g.setEdge("legs", "trojkat_skosny_czern");
g.setEdge("legs", "trojkat_skosny_miedz");
g.setEdge("legs", "trojkat_skosny_srebro");
g.setEdge("legs", "walek_srebro");
g.setEdge("legs", "walek_miedz");
g.setEdge("legs", "walek_czern");
g.setEdge("legs", "kielich_czern");
g.setEdge("legs", "kielich_miedz");
g.setEdge("legs", "kielich_srebro");
g.setEdge("legs", "naroznik_czern");
g.setEdge("legs", "naroznik_miedz");
g.setEdge("legs", "naroznik_srebro");
g.setEdge("legs", "ploza_dab");
g.setEdge("legs", "ploza_buk");
g.setEdge("legs", "ploza_wenge");


g.setEdge("stozek_owal_buk", "stozek_owal_buk_16");
g.setEdge("stozek_owal_wenge", "stozek_owal_wenge_16");
g.setEdge("stozek_owal_dab", "stozek_owal_dab_16");
g.setEdge("stozek_kwadrat_buk", "stozek_kwadrat_buk_16");
g.setEdge("stozek_kwadrat_wenge", "stozek_kwadrat_wenge_16");
g.setEdge("stozek_kwadrat_dab", "stozek_kwadrat_dab_16");
g.setEdge("stozek_skos_buk", "stozek_skos_buk_16");
g.setEdge("stozek_skos_dab", "stozek_skos_dab_16");
g.setEdge("stozek_skos_wenge", "stozek_skos_wenge_16");
g.setEdge("stozek_ze_stopka_czern", "stozek_ze_stopka_czern_16");
g.setEdge("stozek_ze_stopka_miedz", "stozek_ze_stopka_miedz_16");
g.setEdge("stozek_ze_stopka_srebro", "stozek_ze_stopka_srebro_16");
g.setEdge("trojkat_prosty_czern", "trojkat_prosty_czern_16");
g.setEdge("trojkat_prosty_miedz", "trojkat_prosty_miedz_16");
g.setEdge("trojkat_prosty_srebro", "trojkat_prosty_srebro_16");
g.setEdge("trojkat_skosny_czern", "trojkat_skosny_czern_16");
g.setEdge("trojkat_skosny_miedz", "trojkat_skosny_miedz_16");
g.setEdge("trojkat_skosny_srebro", "trojkat_skosny_srebro_16");
g.setEdge("walek_srebro", "walek_srebro_16");
g.setEdge("walek_czern", "walek_czern_16");
g.setEdge("walek_miedz", "walek_miedz_16");
g.setEdge("walek_srebro", "walek_srebro_16");
g.setEdge("kielich_czern", "kielich_czern_16");
g.setEdge("kielich_miedz", "kielich_miedz_16");
g.setEdge("kielich_srebro", "kielich_srebro_16");
g.setEdge("naroznik_czern", "naroznik_czern_16");
g.setEdge("naroznik_miedz", "naroznik_miedz_16");
g.setEdge("naroznik_srebro", "naroznik_srebro_16");

g.setEdge("ploza_dab", "ploza_dab_140");
g.setEdge("ploza_dab", "ploza_dab_160");
g.setEdge("ploza_dab", "ploza_dab_180");
g.setEdge("ploza_dab", "ploza_dab_200");

g.setEdge("ploza_buk", "ploza_buk_140");
g.setEdge("ploza_buk", "ploza_buk_160");
g.setEdge("ploza_buk", "ploza_buk_180");
g.setEdge("ploza_buk", "ploza_buk_200");


g.setEdge("ploza_wenge", "ploza_wenge_140");
g.setEdge("ploza_wenge", "ploza_wenge_160");
g.setEdge("ploza_wenge", "ploza_wenge_180");
g.setEdge("ploza_wenge", "ploza_wenge_200");

//*************8

g.setEdge("step_typ_materaca", "materac_pokrowiec");
g.setEdge("step_typ_materaca", "materac_tapicerowany");

g.setEdge("materac_pokrowiec", "materac_pokrowiec_1");
g.setEdge("materac_tapicerowany", "materac_tapicerowany_1");


g.setEdge("step_4", "materac_tango");
g.setEdge("step_4", "materac_step");
g.setEdge("step_4", "materac_salsa");
g.setEdge("step_4", "materac_pasodoble");
g.setEdge("step_4", "materac_makarena");
g.setEdge("step_4", "materac_rockroll");
g.setEdge("step_4", "materac_melody");
g.setEdge("step_4", "materac_rumba");
g.setEdge("step_4", "materac_boogie");
g.setEdge("step_4", "materac_modern");
g.setEdge("step_4", "materac_conga");
g.setEdge("step_4", "materac_chacha");
g.setEdge("step_4", "materac_foxtrot");
g.setEdge("step_4", "materac_flamenco");

g.setEdge("step_tapicerowany", "materac_foxtrot_tapicerowany");
g.setEdge("step_tapicerowany", "materac_chacha_tapicerowany");
g.setEdge("step_tapicerowany", "materac_flamenco_tapicerowany");

g.setEdge("step_pokrowiec", "materac_tango");
g.setEdge("step_pokrowiec", "materac_step");
g.setEdge("step_pokrowiec", "materac_salsa");
g.setEdge("step_pokrowiec", "materac_pasodoble");
g.setEdge("step_pokrowiec", "materac_makarena");
g.setEdge("step_pokrowiec", "materac_rockroll");
g.setEdge("step_pokrowiec", "materac_melody");
g.setEdge("step_pokrowiec", "materac_rumba");
g.setEdge("step_pokrowiec", "materac_boogie");
g.setEdge("step_pokrowiec", "materac_modern");
g.setEdge("step_pokrowiec", "materac_conga");
g.setEdge("step_pokrowiec", "materac_foxtrot");
g.setEdge("step_pokrowiec", "materac_chacha");
g.setEdge("step_pokrowiec", "materac_flamenco");
g.setEdge("step_pokrowiec", "materac_fandango");
g.setEdge("step_pokrowiec", "materac_zorba");
g.setEdge("step_pokrowiec", "materac_breakdance");
g.setEdge("step_pokrowiec", "materac_funky");
g.setEdge("step_pokrowiec", "materac_dance");
g.setEdge("step_pokrowiec", "materac_lambada");
g.setEdge("step_pokrowiec", "materac_electro");

g.setEdge("materac_tango", "materac_tango_140_200");
g.setEdge("materac_tango", "materac_tango_160_200");
g.setEdge("materac_tango", "materac_tango_180_200");
g.setEdge("materac_tango", "materac_tango_200_200");

g.setEdge("materac_step", "materac_step_140_200");
g.setEdge("materac_step", "materac_step_160_200");
g.setEdge("materac_step", "materac_step_180_200");
g.setEdge("materac_step", "materac_step_200_200");

g.setEdge("materac_salsa", "materac_salsa_140_200");
g.setEdge("materac_salsa", "materac_salsa_160_200");
g.setEdge("materac_salsa", "materac_salsa_180_200");
g.setEdge("materac_salsa", "materac_salsa_200_200");

g.setEdge("materac_chacha", "materac_chacha_140_200");
g.setEdge("materac_chacha", "materac_chacha_160_200");
g.setEdge("materac_chacha", "materac_chacha_180_200");
g.setEdge("materac_chacha", "materac_chacha_200_200");

g.setEdge("materac_pasodoble", "materac_pasodoble_140_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_160_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_180_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_200_200");

g.setEdge("materac_flamenco", "materac_flamenco_140_200");
g.setEdge("materac_flamenco", "materac_flamenco_160_200");
g.setEdge("materac_flamenco", "materac_flamenco_180_200");
g.setEdge("materac_flamenco", "materac_flamenco_200_200");

g.setEdge("materac_makarena", "materac_makarena_140_200");
g.setEdge("materac_makarena", "materac_makarena_160_200");
g.setEdge("materac_makarena", "materac_makarena_180_200");
g.setEdge("materac_makarena", "materac_makarena_200_200");

g.setEdge("materac_rockroll", "materac_rockroll_140_200");
g.setEdge("materac_rockroll", "materac_rockroll_160_200");
g.setEdge("materac_rockroll", "materac_rockroll_180_200");
g.setEdge("materac_rockroll", "materac_rockroll_200_200");

g.setEdge("materac_foxtrot", "materac_foxtrot_140_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_160_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_180_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_200_200");

g.setEdge("materac_melody", "materac_melody_140_200");
g.setEdge("materac_melody", "materac_melody_160_200");
g.setEdge("materac_melody", "materac_melody_180_200");
g.setEdge("materac_melody", "materac_melody_200_200");

g.setEdge("materac_rumba", "materac_rumba_140_200");
g.setEdge("materac_rumba", "materac_rumba_160_200");
g.setEdge("materac_rumba", "materac_rumba_180_200");
g.setEdge("materac_rumba", "materac_rumba_200_200");

g.setEdge("materac_boogie", "materac_boogie_140_200");
g.setEdge("materac_boogie", "materac_boogie_160_200");
g.setEdge("materac_boogie", "materac_boogie_180_200");
g.setEdge("materac_boogie", "materac_boogie_200_200");

g.setEdge("materac_modern", "materac_modern_140_200");
g.setEdge("materac_modern", "materac_modern_160_200");
g.setEdge("materac_modern", "materac_modern_180_200");
g.setEdge("materac_modern", "materac_modern_200_200");

g.setEdge("materac_conga", "materac_conga_140_200");
g.setEdge("materac_conga", "materac_conga_160_200");
g.setEdge("materac_conga", "materac_conga_180_200");
g.setEdge("materac_conga", "materac_conga_200_200");

g.setEdge("materac_fandango", "materac_fandango_140_200");
g.setEdge("materac_fandango", "materac_fandango_160_200");
g.setEdge("materac_fandango", "materac_fandango_180_200");
g.setEdge("materac_fandango", "materac_fandango_200_200");

g.setEdge("materac_zorba", "materac_zorba_140_200");
g.setEdge("materac_zorba", "materac_zorba_160_200");
g.setEdge("materac_zorba", "materac_zorba_180_200");
g.setEdge("materac_zorba", "materac_zorba_200_200");

g.setEdge("materac_breakdance", "materac_breakdance_140_200");
g.setEdge("materac_breakdance", "materac_breakdance_160_200");
g.setEdge("materac_breakdance", "materac_breakdance_180_200");
g.setEdge("materac_breakdance", "materac_breakdance_200_200");

g.setEdge("materac_funky", "materac_funky_140_200");
g.setEdge("materac_funky", "materac_funky_160_200");
g.setEdge("materac_funky", "materac_funky_180_200");
g.setEdge("materac_funky", "materac_funky_200_200");

g.setEdge("materac_dance", "materac_dance_140_200");
g.setEdge("materac_dance", "materac_dance_160_200");
g.setEdge("materac_dance", "materac_dance_180_200");
g.setEdge("materac_dance", "materac_dance_200_200");

g.setEdge("materac_lambada", "materac_lambada_140_200");
g.setEdge("materac_lambada", "materac_lambada_160_200");
g.setEdge("materac_lambada", "materac_lambada_180_200");
g.setEdge("materac_lambada", "materac_lambada_200_200");

g.setEdge("materac_electro", "materac_electro_140_200");
g.setEdge("materac_electro", "materac_electro_160_200");
g.setEdge("materac_electro", "materac_electro_180_200");
g.setEdge("materac_electro", "materac_electro_200_200");

g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_140_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_160_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_180_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_200_200");


g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_140_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_160_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_180_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_200_200");

g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_140_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_160_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_180_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_200_200");

//**************************************************
g.setEdge("bb_step_typ_materaca", "bb_materac_pokrowiec");
g.setEdge("bb_step_typ_materaca", "bb_materac_tapicerowany");

g.setEdge("bb_materac_pokrowiec", "bb_materac_pokrowiec_1");
g.setEdge("bb_materac_tapicerowany", "bb_materac_tapicerowany_1");

g.setEdge("bb_step_tapicerowany", "bb_materac_foxtrot_tapicerowany");
g.setEdge("bb_step_tapicerowany", "bb_materac_chacha_tapicerowany");
g.setEdge("bb_step_tapicerowany", "bb_materac_flamenco_tapicerowany");

g.setEdge("bb_step_pokrowiec", "bb_materac_tango");
g.setEdge("bb_step_pokrowiec", "bb_materac_step");
g.setEdge("bb_step_pokrowiec", "bb_materac_salsa");
g.setEdge("bb_step_pokrowiec", "bb_materac_pasodoble");
g.setEdge("bb_step_pokrowiec", "bb_materac_makarena");
g.setEdge("bb_step_pokrowiec", "bb_materac_rockroll");
g.setEdge("bb_step_pokrowiec", "bb_materac_melody");
g.setEdge("bb_step_pokrowiec", "bb_materac_rumba");
g.setEdge("bb_step_pokrowiec", "bb_materac_boogie");
g.setEdge("bb_step_pokrowiec", "bb_materac_modern");
g.setEdge("bb_step_pokrowiec", "bb_materac_conga");
g.setEdge("bb_step_pokrowiec", "bb_materac_foxtrot");
g.setEdge("bb_step_pokrowiec", "bb_materac_chacha");
g.setEdge("bb_step_pokrowiec", "bb_materac_flamenco");
g.setEdge("bb_step_pokrowiec", "bb_materac_fandango");
g.setEdge("bb_step_pokrowiec", "bb_materac_zorba");
g.setEdge("bb_step_pokrowiec", "bb_materac_breakdance");
g.setEdge("bb_step_pokrowiec", "bb_materac_funky");
g.setEdge("bb_step_pokrowiec", "bb_materac_dance");
g.setEdge("bb_step_pokrowiec", "bb_materac_lambada");
g.setEdge("bb_step_pokrowiec", "bb_materac_electro");

g.setEdge("bb_materac_tango", "bb_materac_tango_140_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_160_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_180_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_200_200");

g.setEdge("bb_materac_step", "bb_materac_step_140_200");
g.setEdge("bb_materac_step", "bb_materac_step_160_200");
g.setEdge("bb_materac_step", "bb_materac_step_180_200");
g.setEdge("bb_materac_step", "bb_materac_step_200_200");

g.setEdge("bb_materac_salsa", "bb_materac_salsa_140_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_160_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_180_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_200_200");

g.setEdge("bb_materac_chacha", "bb_materac_chacha_140_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_160_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_180_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_200_200");

g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_140_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_160_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_180_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_200_200");

g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_140_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_160_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_180_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_200_200");

g.setEdge("bb_materac_makarena", "bb_materac_makarena_140_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_160_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_180_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_200_200");

g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_140_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_160_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_180_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_200_200");

g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_140_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_160_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_180_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_200_200");

g.setEdge("bb_materac_melody", "bb_materac_melody_140_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_160_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_180_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_200_200");

g.setEdge("bb_materac_rumba", "bb_materac_rumba_140_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_160_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_180_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_200_200");

g.setEdge("bb_materac_boogie", "bb_materac_boogie_140_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_160_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_180_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_200_200");

g.setEdge("bb_materac_modern", "bb_materac_modern_140_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_160_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_180_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_200_200");

g.setEdge("bb_materac_conga", "bb_materac_conga_140_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_160_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_180_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_200_200");

g.setEdge("bb_materac_fandango", "bb_materac_fandango_140_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_160_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_180_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_200_200");

g.setEdge("bb_materac_zorba", "bb_materac_zorba_140_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_160_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_180_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_200_200");

g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_140_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_160_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_180_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_200_200");

g.setEdge("bb_materac_funky", "bb_materac_funky_140_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_160_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_180_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_200_200");

g.setEdge("bb_materac_dance", "bb_materac_dance_140_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_160_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_180_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_200_200");

g.setEdge("bb_materac_lambada", "bb_materac_lambada_140_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_160_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_180_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_200_200");

g.setEdge("bb_materac_electro", "bb_materac_electro_140_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_160_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_180_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_200_200");

g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_140_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_160_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_180_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_200_200");


g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_140_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_160_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_180_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_200_200");

g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_140_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_160_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_180_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_200_200");

//***************************************************
g.setEdge("bp_step_typ_materaca", "bp_materac_pokrowiec");
g.setEdge("bp_step_typ_materaca", "bp_materac_tapicerowany");

g.setEdge("bp_materac_pokrowiec", "bp_materac_pokrowiec_1");
g.setEdge("bp_materac_tapicerowany", "bp_materac_tapicerowany_1");

g.setEdge("bp_step_tapicerowany", "bp_materac_foxtrot_tapicerowany");
g.setEdge("bp_step_tapicerowany", "bp_materac_chacha_tapicerowany");
g.setEdge("bp_step_tapicerowany", "bp_materac_flamenco_tapicerowany");

g.setEdge("bp_step_pokrowiec", "bp_materac_tango");
g.setEdge("bp_step_pokrowiec", "bp_materac_step");
g.setEdge("bp_step_pokrowiec", "bp_materac_salsa");
g.setEdge("bp_step_pokrowiec", "bp_materac_pasodoble");
g.setEdge("bp_step_pokrowiec", "bp_materac_makarena");
g.setEdge("bp_step_pokrowiec", "bp_materac_rockroll");
g.setEdge("bp_step_pokrowiec", "bp_materac_melody");
g.setEdge("bp_step_pokrowiec", "bp_materac_rumba");
g.setEdge("bp_step_pokrowiec", "bp_materac_boogie");
g.setEdge("bp_step_pokrowiec", "bp_materac_modern");
g.setEdge("bp_step_pokrowiec", "bp_materac_conga");
g.setEdge("bp_step_pokrowiec", "bp_materac_foxtrot");
g.setEdge("bp_step_pokrowiec", "bp_materac_chacha");
g.setEdge("bp_step_pokrowiec", "bp_materac_flamenco");
g.setEdge("bp_step_pokrowiec", "bp_materac_fandango");
g.setEdge("bp_step_pokrowiec", "bp_materac_zorba");
g.setEdge("bp_step_pokrowiec", "bp_materac_breakdance");
g.setEdge("bp_step_pokrowiec", "bp_materac_funky");
g.setEdge("bp_step_pokrowiec", "bp_materac_dance");
g.setEdge("bp_step_pokrowiec", "bp_materac_lambada");
g.setEdge("bp_step_pokrowiec", "bp_materac_electro");

g.setEdge("bp_materac_tango", "bp_materac_tango_140_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_160_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_180_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_200_200");

g.setEdge("bp_materac_step", "bp_materac_step_140_200");
g.setEdge("bp_materac_step", "bp_materac_step_160_200");
g.setEdge("bp_materac_step", "bp_materac_step_180_200");
g.setEdge("bp_materac_step", "bp_materac_step_200_200");

g.setEdge("bp_materac_salsa", "bp_materac_salsa_140_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_160_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_180_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_200_200");

g.setEdge("bp_materac_chacha", "bp_materac_chacha_140_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_160_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_180_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_200_200");

g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_140_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_160_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_180_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_200_200");

g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_140_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_160_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_180_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_200_200");

g.setEdge("bp_materac_makarena", "bp_materac_makarena_140_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_160_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_180_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_200_200");

g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_140_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_160_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_180_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_200_200");

g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_140_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_160_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_180_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_200_200");

g.setEdge("bp_materac_melody", "bp_materac_melody_140_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_160_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_180_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_200_200");

g.setEdge("bp_materac_rumba", "bp_materac_rumba_140_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_160_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_180_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_200_200");

g.setEdge("bp_materac_boogie", "bp_materac_boogie_140_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_160_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_180_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_200_200");

g.setEdge("bp_materac_modern", "bp_materac_modern_140_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_160_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_180_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_200_200");

g.setEdge("bp_materac_conga", "bp_materac_conga_140_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_160_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_180_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_200_200");

g.setEdge("bp_materac_fandango", "bp_materac_fandango_140_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_160_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_180_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_200_200");

g.setEdge("bp_materac_zorba", "bp_materac_zorba_140_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_160_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_180_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_200_200");

g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_140_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_160_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_180_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_200_200");

g.setEdge("bp_materac_funky", "bp_materac_funky_140_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_160_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_180_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_200_200");

g.setEdge("bp_materac_dance", "bp_materac_dance_140_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_160_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_180_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_200_200");

g.setEdge("bp_materac_lambada", "bp_materac_lambada_140_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_160_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_180_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_200_200");

g.setEdge("bp_materac_electro", "bp_materac_electro_140_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_160_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_180_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_200_200");

g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_140_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_160_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_180_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_200_200");


g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_140_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_160_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_180_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_200_200");

g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_140_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_160_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_180_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_200_200");

//******************************************************************************

g.setEdge("t_materac", "t_materac_tango");
g.setEdge("t_materac", "t_materac_step");
g.setEdge("t_materac", "t_materac_salsa");
g.setEdge("t_materac", "t_materac_pasodoble");
g.setEdge("t_materac", "t_materac_makarena");
g.setEdge("t_materac", "t_materac_rockroll");
g.setEdge("t_materac", "t_materac_melody");
g.setEdge("t_materac", "t_materac_rumba");
g.setEdge("t_materac", "t_materac_boogie");
g.setEdge("t_materac", "t_materac_modern");
g.setEdge("t_materac", "t_materac_conga");
g.setEdge("t_materac", "t_materac_foxtrot");
g.setEdge("t_materac", "t_materac_chacha");
g.setEdge("t_materac", "t_materac_flamenco");
g.setEdge("t_materac", "t_materac_fandango");
g.setEdge("t_materac", "t_materac_zorba");
g.setEdge("t_materac", "t_materac_breakdance");
g.setEdge("t_materac", "t_materac_funky");
g.setEdge("t_materac", "t_materac_dance");
g.setEdge("t_materac", "t_materac_lambada");
g.setEdge("t_materac", "t_materac_electro");

g.setEdge("t_materac_tango", "t_materac_tango_90_200");
g.setEdge("t_materac_tango", "t_materac_tango_140_200");
g.setEdge("t_materac_tango", "t_materac_tango_160_200");
g.setEdge("t_materac_tango", "t_materac_tango_180_200");
g.setEdge("t_materac_tango", "t_materac_tango_200_200");

g.setEdge("t_materac_step", "t_materac_step_90_200");
g.setEdge("t_materac_step", "t_materac_step_140_200");
g.setEdge("t_materac_step", "t_materac_step_160_200");
g.setEdge("t_materac_step", "t_materac_step_180_200");
g.setEdge("t_materac_step", "t_materac_step_200_200");

g.setEdge("t_materac_salsa", "t_materac_salsa_90_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_140_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_160_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_180_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_200_200");

g.setEdge("t_materac_chacha", "t_materac_chacha_90_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_140_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_160_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_180_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_200_200");

g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_90_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_140_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_160_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_180_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_200_200");

g.setEdge("t_materac_flamenco", "t_materac_flamenco_90_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_140_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_160_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_180_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_200_200");

g.setEdge("t_materac_makarena", "t_materac_makarena_90_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_140_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_160_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_180_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_200_200");

g.setEdge("t_materac_rockroll", "t_materac_rockroll_90_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_140_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_160_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_180_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_200_200");

g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_90_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_140_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_160_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_180_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_200_200");

g.setEdge("t_materac_melody", "t_materac_melody_90_200");
g.setEdge("t_materac_melody", "t_materac_melody_140_200");
g.setEdge("t_materac_melody", "t_materac_melody_160_200");
g.setEdge("t_materac_melody", "t_materac_melody_180_200");
g.setEdge("t_materac_melody", "t_materac_melody_200_200");

g.setEdge("t_materac_rumba", "t_materac_rumba_90_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_140_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_160_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_180_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_200_200");

g.setEdge("t_materac_boogie", "t_materac_boogie_90_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_140_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_160_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_180_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_200_200");

g.setEdge("t_materac_modern", "t_materac_modern_90_200");
g.setEdge("t_materac_modern", "t_materac_modern_140_200");
g.setEdge("t_materac_modern", "t_materac_modern_160_200");
g.setEdge("t_materac_modern", "t_materac_modern_180_200");
g.setEdge("t_materac_modern", "t_materac_modern_200_200");

g.setEdge("t_materac_conga", "t_materac_conga_90_200");
g.setEdge("t_materac_conga", "t_materac_conga_140_200");
g.setEdge("t_materac_conga", "t_materac_conga_160_200");
g.setEdge("t_materac_conga", "t_materac_conga_180_200");
g.setEdge("t_materac_conga", "t_materac_conga_200_200");

g.setEdge("t_materac_fandango", "t_materac_fandango_90_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_140_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_160_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_180_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_200_200");

g.setEdge("t_materac_zorba", "t_materac_zorba_90_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_140_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_160_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_180_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_200_200");

g.setEdge("t_materac_breakdance", "t_materac_breakdance_90_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_140_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_160_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_180_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_200_200");

g.setEdge("t_materac_funky", "t_materac_funky_90_200");
g.setEdge("t_materac_funky", "t_materac_funky_140_200");
g.setEdge("t_materac_funky", "t_materac_funky_160_200");
g.setEdge("t_materac_funky", "t_materac_funky_180_200");
g.setEdge("t_materac_funky", "t_materac_funky_200_200");

g.setEdge("t_materac_dance", "t_materac_dance_90_200");
g.setEdge("t_materac_dance", "t_materac_dance_140_200");
g.setEdge("t_materac_dance", "t_materac_dance_160_200");
g.setEdge("t_materac_dance", "t_materac_dance_180_200");
g.setEdge("t_materac_dance", "t_materac_dance_200_200");

g.setEdge("t_materac_lambada", "t_materac_lambada_90_200");
g.setEdge("t_materac_lambada", "t_materac_lambada_140_200");
g.setEdge("t_materac_lambada", "t_materac_lambada_160_200");
g.setEdge("t_materac_lambada", "t_materac_lambada_180_200");
g.setEdge("t_materac_lambada", "t_materac_lambada_200_200");

g.setEdge("t_materac_electro", "t_materac_electro_90_200");
g.setEdge("t_materac_electro", "t_materac_electro_140_200");
g.setEdge("t_materac_electro", "t_materac_electro_160_200");
g.setEdge("t_materac_electro", "t_materac_electro_180_200");
g.setEdge("t_materac_electro", "t_materac_electro_200_200");

//*******************************************************

g.setEdge("step_5", "materac_bass");
g.setEdge("step_5", "materac_alt");
g.setEdge("step_5", "materac_tenor");

g.setEdge("materac_alt", "materac_alt_140_200");
g.setEdge("materac_alt", "materac_alt_160_200");
g.setEdge("materac_alt", "materac_alt_180_200");
g.setEdge("materac_alt", "materac_alt_200_200");

g.setEdge("materac_tenor", "materac_tenor_140_200");
g.setEdge("materac_tenor", "materac_tenor_160_200");
g.setEdge("materac_tenor", "materac_tenor_180_200");
g.setEdge("materac_tenor", "materac_tenor_200_200");

g.setEdge("materac_bass", "materac_bass_140_200");
g.setEdge("materac_bass", "materac_bass_160_200");
g.setEdge("materac_bass", "materac_bass_180_200");
g.setEdge("materac_bass", "materac_bass_200_200");


//**********************************

g.setEdge("bb_nawierzchniowy", "bb_materac_bass");
g.setEdge("bb_nawierzchniowy", "bb_materac_alt");
g.setEdge("bb_nawierzchniowy", "bb_materac_tenor");

g.setEdge("bb_materac_alt", "bb_materac_alt_140_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_160_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_180_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_200_200");

g.setEdge("bb_materac_tenor", "bb_materac_tenor_140_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_160_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_180_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_200_200");

g.setEdge("bb_materac_bass", "bb_materac_bass_140_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_160_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_180_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_200_200");

//*****************************************

g.setEdge("bp_nawierzchniowy", "bp_materac_bass");
g.setEdge("bp_nawierzchniowy", "bp_materac_alt");
g.setEdge("bp_nawierzchniowy", "bp_materac_tenor");

g.setEdge("bp_materac_alt", "bp_materac_alt_140_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_160_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_180_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_200_200");

g.setEdge("bp_materac_tenor", "bp_materac_tenor_140_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_160_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_180_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_200_200");

g.setEdge("bp_materac_bass", "bp_materac_bass_140_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_160_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_180_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_200_200");

//*****************************************

g.setEdge("covers_italiano_tencel_new", "cover_italiano");
g.setEdge("covers_italiano_tencel_new", "cover_tencel_new");
g.setEdge("covers_velvet_tencel", "cover_velvet");
g.setEdge("covers_velvet_tencel", "cover_tencel");
g.setEdge("covers_velvet_new_tencel_new", "cover_velvet_new");
g.setEdge("covers_velvet_new_tencel_new", "cover_tencel_new");
g.setEdge("covers_tencel", "cover_tencel");
g.setEdge("covers_tencel_new", "cover_tencel_new");

g.setEdge("covers_velvet", "cover_velvet");

g.setEdge("covers_cashmere", "cover_cashmere");

g.setEdge("covers_elips_medicott", "cover_medicott");
g.setEdge("covers_elips_medicott", "cover_elips_1");

g.setEdge("covers_silver", "cover_silver");
g.setEdge("covers_medicover", "cover_medicover");
g.setEdge("covers_young", "cover_young");
g.setEdge("covers_italiano", "cover_italiano");
g.setEdge("covers_probiotex", "cover_probiotex");
g.setEdge("covers_italiano_hybrid", "cover_italiano_1");
g.setEdge("covers_italiano_hybrid", "cover_hybrid_2");
g.setEdge("covers_cashmere_tencel_top", "cover_cashmere_top");
g.setEdge("covers_cashmere_tencel_top", "cover_tencel_top");
g.setEdge("covers_tencel_top", "cover_tencel_top");
g.setEdge("covers_merced_elips", "cover_merced_1");
g.setEdge("covers_merced_elips", "cover_elips_2");
g.setEdge("covers_elips_tencel_top", "cover_elips_top");
g.setEdge("covers_elips_tencel_top", "cover_tencel_top");
g.setEdge("covers_sensity_top", "cover_sensity_top");

//************************************************

g.setEdge("bp_covers_italiano_tencel_new", "bp_cover_italiano");
g.setEdge("bp_covers_italiano_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_velvet_tencel", "bp_cover_velvet");
g.setEdge("bp_covers_velvet_tencel", "bp_cover_tencel");

g.setEdge("bp_covers_velvet_new_tencel_new", "bp_cover_velvet_new");
g.setEdge("bp_covers_velvet_new_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_velvet", "bp_cover_velvet");

g.setEdge("bp_covers_cashmere", "bp_cover_cashmere");

g.setEdge("bp_covers_elips_medicott", "bp_cover_medicott");
g.setEdge("bp_covers_elips_medicott", "bp_cover_elips_1");

g.setEdge("bp_covers_silver", "bp_cover_silver");
g.setEdge("bp_covers_medicover", "bp_cover_medicover");
g.setEdge("bp_covers_young", "bp_cover_young");
g.setEdge("bp_covers_italiano", "bp_cover_italiano");
g.setEdge("bp_covers_probiotex", "bp_cover_probiotex");
g.setEdge("bp_covers_tencel", "bp_cover_tencel");
g.setEdge("bp_covers_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_italiano_hybrid", "bp_cover_italiano_1");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_hybrid_2");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_cashmere_top");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_italiano_1");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_hybrid_2");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_cashmere_top");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_merced_elips", "bp_cover_merced_1");
g.setEdge("bp_covers_merced_elips", "bp_cover_elips_2");
g.setEdge("bp_covers_elips_tencel_top", "bp_cover_elips_top");
g.setEdge("bp_covers_elips_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_sensity_top", "bp_cover_sensity_top");

//************************************************

g.setEdge("covers_italiano_tencel_new_t", "cover_italiano_t");
g.setEdge("covers_italiano_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_velvet_tencel_t", "cover_velvet_t");
g.setEdge("covers_velvet_tencel_t", "cover_tencel_t");

g.setEdge("covers_velvet_new_tencel_new_t", "cover_velvet_new_t");
g.setEdge("covers_velvet_new_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_velvet_t", "cover_velvet_t");

g.setEdge("covers_tencel_t", "cover_tencel_t");
g.setEdge("covers_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_cashmere_t", "cover_cashmere_t");

g.setEdge("covers_elips_medicott_t", "cover_medicott_t");
g.setEdge("covers_elips_medicott_t", "cover_elips_1_t");

g.setEdge("covers_silver_t", "cover_silver_t");
g.setEdge("covers_medicover_t", "cover_medicover_t");
g.setEdge("covers_merced_elips_t", "cover_merced_1_t");
g.setEdge("covers_merced_elips_t", "cover_elips_2_t");
g.setEdge("covers_young_t", "cover_young_t");
g.setEdge("covers_italiano_t", "cover_italiano_t");
g.setEdge("covers_probiotex_t", "cover_probiotex_t");
g.setEdge("covers_italiano_hybrid_t", "cover_italiano_1_t");
g.setEdge("covers_italiano_hybrid_t", "cover_hybrid_2_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_cashmere_top_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_italiano_hybrid_t", "cover_italiano_1_t");
g.setEdge("covers_italiano_hybrid_t", "cover_hybrid_2_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_cashmere_top_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_tencel_top_t", "cover_tencel_top_t");

//************************************************

g.setEdge("step_6", "otomana");

g.setEdge("otomana", "otomana_140");
g.setEdge("otomana", "otomana_160");
g.setEdge("otomana", "otomana_180");

console.log("this.graph = g;");
configurator.graph = g;
;
