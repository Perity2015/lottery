export enum LotteryStatus {
	NORMAL="NORMAL",
	ROLL="ROLL",
	STOP="STOP",
}

export enum PrizeLevel {
	THIRD = "THIRD",
	SECOND = "SECOND",
	FIRST = "FIRST",
}

export const TimeInterval = {
	roll: 50,
	lottery: 2000,
}

export const StatusText = {
	[LotteryStatus.NORMAL]: "开始抽奖",
	[LotteryStatus.ROLL]: "停止",
	[LotteryStatus.STOP]: "自动抽取中",
}

export const StorageKeys = {
	EMPLOYEES:"EMPLOYEES",
	THIRD:PrizeLevel.THIRD,
	SECOND:PrizeLevel.SECOND,
	FIRST:PrizeLevel.FIRST,
}

export const CompanyPrizes = {
	[PrizeLevel.THIRD]:{
		key: PrizeLevel.THIRD,
		name: "价值600元老凤祥足金金饰",
		per: 10,
		style: {},
		title: "三等奖",
		total: 30
	},
	[PrizeLevel.SECOND]:{
		key: PrizeLevel.SECOND,
		name: "价值1500元恒源祥羽绒被",
		per: 4,
		style: {fontSize: "0.5rem", lineHeight: 2, width: "50%"},
		title: "二等奖",
		total: 8
	},
	[PrizeLevel.FIRST]:{
		key: PrizeLevel.FIRST,
		name: "价值3500元 Ipad",
		per: 1,
		style: {fontSize: "0.8rem", lineHeight: 4, width: "100%"},
		title: "一等奖",
		total: 2
	},
}

export const Employees = [{"index":1,"name":"杨刚","no":"E001"},{"index":2,"name":"赵洪旭","no":"E002"},{"index":3,"name":"陈兵","no":"E004"},{"index":5,"name":"李仲法","no":"E007"},{"index":6,"name":"范文伟","no":"E008"},{"index":10,"name":"夏乐","no":"E018"},{"index":11,"name":"杨胜杰","no":"E021"},{"index":14,"name":"陆静","no":"E028"},{"index":16,"name":"杨金萍","no":"E063"},{"index":17,"name":"张亚云","no":"E033"},{"index":19,"name":"王瑞娅","no":"E035"},{"index":20,"name":"张晓萍","no":"E088"},{"index":21,"name":"孙彩琳","no":"E044"},{"index":22,"name":"沈志刚","no":"E057"},{"index":23,"name":"陆铭","no":"E116"},{"index":24,"name":"丁永昌","no":"E089"},{"index":25,"name":"王威","no":"E047"},{"index":26,"name":"陆源","no":"E048"},{"index":27,"name":"胡兵","no":"E068"},{"index":28,"name":"王陈涛","no":"E069"},{"index":31,"name":"曹艳琳","no":"E085"},{"index":32,"name":"唐玉花","no":"E061"},{"index":33,"name":"祁小杰","no":"E081"},{"index":34,"name":"栾志英","no":"E090"},{"index":35,"name":"姜雷","no":"E093"},{"index":36,"name":"张甜","no":"E097"},{"index":37,"name":"黄俊伟","no":"E098"},{"index":38,"name":"梅帅","no":"E101"},{"index":39,"name":"王严春","no":"E103"},{"index":40,"name":"丁燕","no":"E106"},{"index":41,"name":"姜丹丹","no":"E108"},{"index":42,"name":"连孟浩","no":"E110"},{"index":43,"name":"李煜","no":"E115"},{"index":44,"name":"王海燕","no":"E119"},{"index":45,"name":"季婷婷","no":"E140"},{"index":47,"name":"孟国杰","no":"E130"},{"index":48,"name":"甘卓梅","no":"E134"},{"index":50,"name":"张华","no":"E158"},{"index":51,"name":"刘嵘","no":"E161"},{"index":52,"name":"徐玥","no":"E164"},{"index":53,"name":"陆春雨","no":"E167"},{"index":54,"name":"胡宵豪","no":"E169"},{"index":56,"name":"张欢欢","no":"E222"},{"index":57,"name":"司应朵","no":"E176"},{"index":58,"name":"王雨","no":"E180"},{"index":59,"name":"刘亨通","no":"E223"},{"index":60,"name":"辛文仲","no":"E181"},{"index":61,"name":"胡佩阳","no":"E182"},{"index":62,"name":"张涛","no":"E185"},{"index":63,"name":"费鹏","no":"E186"},{"index":64,"name":"周伟","no":"E187"},{"index":65,"name":"童鸣","no":"E184"},{"index":67,"name":"彭积坤","no":"E190"},{"index":68,"name":"唐霞","no":"E191"},{"index":69,"name":"南俊博","no":"E189"},{"index":70,"name":"沈友俊","no":"E194"},{"index":73,"name":"张端华","no":"E201"},{"index":75,"name":"陈小扁","no":"E207"},{"index":76,"name":"华冬冬","no":"E208"},{"index":80,"name":"孟立宇","no":"E215"},{"index":82,"name":"谭佳佳","no":"E227"},{"index":83,"name":"胡同敏","no":"E230"},{"index":85,"name":"徐俊俊","no":"E244"},{"index":86,"name":"陈陆明","no":"E243"},{"index":87,"name":"郑志明","no":"E246"},{"index":88,"name":"吴鑫铱","no":"E245"},{"index":89,"name":"谢静怡","no":"E249"},{"index":91,"name":"余超","no":"E257"},{"index":92,"name":"靳义强","no":"E296"},{"index":93,"name":"邱文博","no":"E260"},{"index":94,"name":"吴锋","no":"E264"},{"index":95,"name":"郭蕾萍","no":"E266"},{"index":97,"name":"周波","no":"E270"},{"index":98,"name":"朱蓓芳","no":"E275"},{"index":99,"name":"杨丽丽","no":"E276"},{"index":100,"name":"季俊伟","no":"E280"},{"index":102,"name":"赵峰","no":"E284"},{"index":103,"name":"王蒙锦","no":"E287"},{"index":109,"name":"王仁周","no":"E301"},{"index":110,"name":"何康","no":"E371"},{"index":112,"name":"方斌","no":"E303"},{"index":113,"name":"陈泉清","no":"E304"},{"index":115,"name":"卢玉涛","no":"E306"},{"index":116,"name":"付珊珊","no":"E308"},{"index":117,"name":"余凌","no":"E309"},{"index":118,"name":"崔佳琪","no":"E310"},{"index":120,"name":"姜雪","no":"E314"},{"index":121,"name":"刘丽","no":"E318"},{"index":122,"name":"刘安吉","no":"E320"},{"index":123,"name":"阚文生","no":"E321"},{"index":124,"name":"喻麒麟","no":"E324"},{"index":125,"name":"郑晰月","no":"E325"},{"index":127,"name":"汪迪生","no":"E327"},{"index":128,"name":"张利","no":"E328"},{"index":129,"name":"钱斌","no":"E329"},{"index":130,"name":"王勋","no":"E331"},{"index":131,"name":"李晗","no":"E334"},{"index":132,"name":"耿亚娟","no":"E336"},{"index":133,"name":"应显瑾","no":"E340"},{"index":134,"name":"李妍","no":"E338"},{"index":136,"name":"陈龙飞","no":"E341"},{"index":137,"name":"何琳","no":"E343"},{"index":138,"name":"黄晓露","no":"E344"},{"index":139,"name":"周婷","no":"E345"},{"index":140,"name":"陈仁杰","no":"E346"},{"index":141,"name":"佟岩","no":"E348"},{"index":142,"name":"党玉杰","no":"E347"},{"index":143,"name":"纪重阳","no":"E349"},{"index":144,"name":"耿万","no":"E351"},{"index":145,"name":"朱加蒙","no":"E350"},{"index":146,"name":"宋军波","no":"E354"},{"index":147,"name":"金鹏飞","no":"E353"},{"index":148,"name":"马群","no":"E355"},{"index":149,"name":"于真","no":"E356"},{"index":150,"name":"倪永烽","no":"E358"},{"index":151,"name":"许朝发","no":"E360"},{"index":153,"name":"张圆圆","no":"E362"},{"index":154,"name":"邵海","no":"E363"},{"index":155,"name":"徐佳敏","no":"E366"},{"index":156,"name":"谢楠","no":"E365"},{"index":157,"name":"夏俊峰","no":"E368"},{"index":158,"name":"李岚","no":"E367"},{"index":159,"name":"刘泉福","no":"E370"},{"index":160,"name":"阚超杰","no":"E372"},{"index":161,"name":"徐阳新","no":"E376"},{"index":163,"name":"李晓伟","no":"E379"},{"index":164,"name":"高佩瑶","no":"E381"},{"index":165,"name":"颜孕欧","no":"E380"},{"index":166,"name":"顾继光","no":"E383"},{"index":167,"name":"任红瑞","no":"E384"},{"index":168,"name":"郝路路","no":"E385"},{"index":169,"name":"汤明","no":"E388"},{"index":170,"name":"邓世豪","no":"E386"},{"index":171,"name":"王啸龙","no":"E389"},{"index":172,"name":"苏军科","no":"E390"},{"index":174,"name":"朱鸿飞","no":"E392"},{"index":177,"name":"王秋尧","no":"E399"},{"index":178,"name":"杨小红","no":"E398"},{"index":180,"name":"刘庆义","no":"E402"},{"index":181,"name":"张玉","no":"E404"},{"index":182,"name":"马帅","no":"E405"},{"index":183,"name":"王毅达","no":"E406"},{"index":185,"name":"张果珍","no":"E407"},{"index":186,"name":"单宇杰","no":"E409"},{"index":187,"name":"徐思喆","no":"E408"},{"index":188,"name":"许辉","no":"E410"},{"index":189,"name":"邵新伟","no":"E411"},{"index":190,"name":"倪俭","no":"E412"},{"index":191,"name":"张文娟","no":"E414"},{"index":192,"name":"张泽涛","no":"E415"},{"index":194,"name":"蔡李静","no":"E417"},{"index":195,"name":"李奇奇","no":"E416"},{"index":196,"name":"梁莉","no":"E419"},{"index":197,"name":"曹亚丽","no":"E420"}];