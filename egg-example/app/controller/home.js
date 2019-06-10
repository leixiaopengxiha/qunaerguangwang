'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // eslint-disable-next-line no-unused-vars
    const homeName = ctx.query.name;
    // eslint-disable-next-line no-unused-vars
    const dataHomes = {
      data: [
        {
          city: '北京',
          swiperList: [
            {
              id: '01',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg',
            },
            {
              id: '02',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg',
            },
            {
              id: '03',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg',
            },
            {
              id: '04',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e0c5d91cb9b435518bb223b81b70874e.jpg_750x200_f2d5c66a.jpg',
            },
          ],
          iconsList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
              title: '景点门票',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
              title: '海立方',
            },
            {
              id: '03',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
              title: '三晋乐园',
            },
            {
              id: '04',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              title: '晋中必游',
            },
            {
              id: '05',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
              title: '名胜古迹',
            },
            {
              id: '06',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
              title: '榆次老城',
            },
            {
              id: '07',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
              title: '平遥古城',
            },
            {
              id: '08',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/7bf8b80a7f93393615c0d5790834aa77.png',
              title: '乌金山狂',
            },
            {
              id: '0',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
              title: '北京世园',
            },
            {
              id: '1',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
              title: '北京欢乐',
            },
          ],
          hotList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
              title: '故宫',
              mark: '20',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
              title: '北京世界艺博览会',
              mark: '108',
            },
            {
              id: '03',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg',
              title: '八达岭长',
              mark: '125',
            },
            {
              id: '04',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg',
              title: '颐和园',
              mark: '30',
            },
            {
              id: '05',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/24/92759d9d52af059a7849f482f10358c5.jpg_250x250_bb4897b4.jpg',
              title: '平谷桃花',
              mark: '33',
            },
            {
              id: '06',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_250x250_ecfa0df2.jpg',
              title: '水立方',
              mark: '49',
            },
            {
              id: '07',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_250x250_090a42b6.jpg',
              title: '什刹海',
              mark: '9.9',
            },
            {
              id: '08',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
              title: '恭王府',
              mark: '62',
            },
            {
              id: '09',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/e5/e5621c1bb593240c.water.jpg_250x250_cf47a0fd.jpg',
              title: '雍和宫',
              mark: '50',
            },
            {
              id: '10',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_250x250_b23119c8.jpg',
              title: '八达岭长缆车',
              mark: '62',
            },
          ],
          likeList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_200x200_50323152.jpg',
              title: '北京世界艺博览会',
              massage: '123432',
              pre: '18.8',
              map: '平谷区',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
              title: '八达岭长',
              massage: '232323',
              pre: '125',
              map: '延庆县',
            },
          ],
          vacationList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
              title: '京城周末欢',
              msg: '在帝都过周末，不仅仅是城中游！',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
              title: '北京赏花地方',
              msg: '乱花渐欲迷人眼，京城赏花大搜索',
            },
            {
              id: '03',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
              title: '京城溜娃去',
              msg: '德智体美劳全面发展的亲子日，这些地方该去看看…',
            },
          ],
        },
        {
          city: '上海',
          swiperList: [
            {
              id: '01',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg',
            },
            {
              id: '02',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg',
            },
            {
              id: '03',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/0ba6d3d25a22d6a0209e17292af2c16f.jpg_750x200_3b96e112.jpg',
            },
            {
              id: '04',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e0c5d91cb9b435518bb223b81b70874e.jpg_750x200_f2d5c66a.jpg',
            },
            {
              id: '05',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/f825d8b3d7f6a3b8412baf7e7b99216a.jpg_750x200_57f2201f.jpg',
            },
          ],
          iconsList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
              title: '景点门票',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
              title: '一日游',
            },
            {
              id: '03',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
              title: '半价上海游',
            },
            {
              id: '04',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
              title: '室内娱乐',
            },
            {
              id: '05',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
              title: '动植物园',
            },
            {
              id: '06',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cb506456115da181cd1deadfa17bfee9.png',
              title: '浦江郊野公园',
            },
            {
              id: '07',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
              title: '世纪公园',
            },
            {
              id: '08',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
              title: '上海野生',
            },
            {
              id: '09',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
              title: '上海迪士尼',
            },
            {
              id: '10',
              imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
              title: '上海海昌',
            },
          ],
          hotList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
              title: '上海迪士尼乐园',
              mark: '532',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_250x250_cf952d13.jpg',
              title: '上海野生动物园',
              mark: '117.6',
            },
            {
              id: '03',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
              title: '上海欢乐谷',
              mark: '208',
            },
            {
              id: '04',
              imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
              title: '东方明珠',
              mark: '85',
            },
            {
              id: '05',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
              title: '黄浦江游览（十六铺码头）',
              mark: '80',
            },
            {
              id: '06',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/6e/6edffb73a665bc70a3.img.jpg_250x250_5d7fce3e.jpg',
              title: '上海海昌海洋公园',
              mark: '159',
            },
            {
              id: '07',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_250x250_4c832079.jpg',
              title: '上海动物园',
              mark: '37',
            },
            {
              id: '08',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
              title: '上海杜莎夫人蜡像馆',
              mark: '129.9',
            },
            {
              id: '09',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/22/2215fe5ef7127740fe578018de575df6.jpg_250x250_9928a69f.jpg',
              title: '东方绿舟',
              mark: '43.4',
            },
            {
              id: '10',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/62/62981f052681ef5ba3.img.jpg_250x250_11d6ec49.jpg',
              title: '上海中心大厦',
              mark: '90',
            },
          ],
          likeList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
              title: '上海迪士尼乐园',
              massage: '238971',
              pre: '532',
              map: '浦东新区',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
              title: '八达岭长',
              massage: '232323',
              pre: '125',
              map: '延庆县',
            },
          ],
          vacationList: [
            {
              id: '01',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
              title: '京城周末欢',
              msg: '在帝都过周末，不仅仅是城中游！',
            },
            {
              id: '02',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
              title: '北京赏花地方',
              msg: '乱花渐欲迷人眼，京城赏花大搜索',
            },
            {
              id: '03',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
              title: '京城溜娃去',
              msg: '德智体美劳全面发展的亲子日，这些地方该去看看…',
            },
          ],
        },
      ],
    };
    // eslint-disable-next-line eqeqeq
    const dataHome = dataHomes.data.find(item => item.city == homeName);
    ctx.body = dataHome;
  }
}

module.exports = HomeController;
