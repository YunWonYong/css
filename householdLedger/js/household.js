const rows = [{"date":"2024-12-08 12:19:52","place":"암사","category":"간식","category2":"초콜릿","amount":3600,"amounts":"1800,1800"},{"date":"2024-12-06 17:54:19","place":"안동","category":"간식","category2":"아이스크림","amount":3000,"amounts":"3000"},{"date":"2024-12-07 18:24:25","place":"안동","category":"숙박","category2":"입욕제","amount":6000,"amounts":"3000,3000"},{"date":"2024-12-04 21:01:36","place":"암사","category":"오락","category2":"노래방","amount":1000,"amounts":"1000"},{"date":"2024-12-07 16:19:34","place":"안동","category":"식사","category2":"찜닭","amount":34000,"amounts":"34000"},{"date":"2024-12-04 20:18:17","place":"암사","category":"오락","category2":"노래방","amount":3000,"amounts":"3000"},{"date":"2024-12-08 18:05:00","place":"안동","category":"간식","category2":"월영교달빵","amount":6000,"amounts":"3000,3000"},{"date":"2024-12-04 20:11:45","place":"암사","category":"간식","category2":"대림스노우크랩버터","amount":2950,"amounts":"2950"},{"date":"2024-12-04 20:11:45","place":"암사","category":"식재료","category2":"소스","amount":2550,"amounts":"2550"},{"date":"2024-12-04 20:11:45","place":"암사","category":"식재료","category2":"채소","amount":6410,"amounts":"1400,970,1500,1270,1270"},{"date":"2024-12-04 20:11:45","place":"암사","category":"기타","category2":"쓰레기봉투","amount":490,"amounts":"490"},{"date":"2024-12-07 19:47:55","place":"안동","category":"간식","category2":"카페","amount":19300,"amounts":"7500,7500,4300"},{"date":"2024-12-07 20:42:00","place":"안동","category":"간식","category2":"편의점","amount":1500,"amounts":"1500"},{"date":"2024-12-07 14:49:58","place":"안동","category":"간식","category2":"꽈배기","amount":3500,"amounts":"1000,1000,1500"},{"date":"2024-12-08 12:30:00","place":"안동","category":"의류","category2":"머플러","amount":7900,"amounts":"7900"},{"date":"2024-12-08 12:30:00","place":"안동","category":"의류","category2":"비니","amount":11800,"amounts":"5900,5900"},{"date":"2024-12-08 18:55:00","place":"안동","category":"간식","category2":"편의점","amount":3600,"amounts":"1200,1200,1200"},{"date":"2024-12-06 17:46:56","place":"암사","category":"식사","category2":"치킨","amount":15000,"amounts":"15000"},{"date":"2024-12-07 06:53:00","place":"암사","category":"간식","category2":"편의점","amount":1700,"amounts":"1700"},{"date":"2024-12-07 06:50:32","place":"암사","category":"간식","category2":"아이스크림","amount":2000,"amounts":"1200,800"},{"date":"2024-12-08 18:07:00","place":"안동","category":"간식","category2":"카페","amount":11000,"amounts":"5500,5500"},{"date":"2024-12-08 12:07:00","place":"안동","category":"식사","category2":"간고등어","amount":26000,"amounts":"13000,13000"},{"date":"2024-12-08 12:07:00","place":"안동","category":"간식","category2":"식혜","amount":1000,"amounts":"1000"},{"date":"2024-12-08 16:08:35","place":"안동","category":"문화","category2":"싸우나","amount":13000,"amounts":"6500,6500"},{"date":"2024-12-08 15:41:04","place":"안동","category":"식사","category2":"말콥버거","amount":25800,"amounts":"8900,9900,7000"},{"date":"2024-12-08 14:15:00","place":"안동","category":"간식","category2":"편의점","amount":3000,"amounts":"1000,1000,1000"},{"date":"2024-12-08 17:16:24","place":"안동","category":"간식","category2":"싸우나 매점","amount":2500,"amounts":"2500"},{"date":"2024-12-08 17:33:08","place":"안동","category":"간식","category2":"싸우나매점","amount":1800,"amounts":"1800"},{"date":"2024-12-08 12:37:00","place":"안동","category":"간식","category2":"카페","amount":3500,"amounts":"2000,1500"},{"date":"2024-12-07 18:39:00","place":"안동","category":"생활용품","category2":"마스크","amount":6000,"amounts":"3000,3000"},{"date":"2024-12-07 20:59:37","place":"안동","category":"식사","category2":"피자","amount":16900,"amounts":"16900"},{"date":"2024-12-07 21:03:51","place":"안동","category":"간식","category2":"편의점","amount":3600,"amounts":"3600"},{"date":"2024-12-06 14:01:00","place":"안동","category":"숙소","category2":"모텔","amount":78991,"amounts":"78991"},{"date":"2024-12-07 19:36:00","place":"안동","category":"교통","category2":"택시","amount":11700,"amounts":"11700"},{"date":"2024-12-07 20:57:00","place":"안동","category":"교통","category2":"택시","amount":6900,"amounts":"6900"},{"date":"2024-12-08 13:30:00","place":"안동","category":"교통","category2":"택시","amount":7900,"amounts":"7900"},{"date":"2024-12-08 16:06:00","place":"안동","category":"교통","category2":"택시","amount":13600,"amounts":"13600"},{"date":"2024-12-02 22:23:00","place":"암사","category":"소스","category2":"굵은소금","amount":5300,"amounts":"5300"},{"date":"2024-12-02 22:24:00","place":"암사","category":"간식","category2":"편의점","amount":1500,"amounts":"1500"},{"date":"2024-12-03 20:45:00","place":"암사","category":"간식","category2":"편의점","amount":8980,"amounts":"8980"},{"date":"2024-12-04 14:04:00","place":"암사","category":"간식","category2":"편의점","amount":3600,"amounts":"3600"},{"date":"2024-12-04 14:06:00","place":"암사","category":"간식","category2":"카페","amount":5800,"amounts":"5800"},{"date":"2024-12-04 20:15:00","place":"암사","category":"간식","category2":"카페","amount":3800,"amounts":"3800"},{"date":"2024-12-06 13:06:00","place":"수내","category":"식사","category2":"청년다방","amount":25500,"amounts":"25500"},{"date":"2024-12-06 13:14:00","place":"수내","category":"교통","category2":"고속버스","amount":48800,"amounts":"48800"},{"date":"2024-12-06 13:53:00","place":"수내","category":"간식","category2":"카페","amount":7000,"amounts":"7000"},{"date":"2024-12-06 17:54:00","place":"암사","category":"미용","category2":"미용실","amount":3000,"amounts":"3000"},{"date":"2024-12-06 17:59:00","place":"암사","category":"간식","category2":"주류","amount":12000,"amounts":"12000"},{"date":"2024-12-07 10:20:00","place":"자동이체","category":"구독","category2":"쿠팡","amount":7890,"amounts":"7890"},{"date":"2024-12-07 11:32:00","place":"고속터미널","category":"간식","category2":"편의점","amount":2500,"amounts":"2500"},{"date":"2024-12-07 11:36:00","place":"고속터미널","category":"간식","category2":"편의점","amount":900,"amounts":"900"}];


const householdLoad = () => {
    const table = document.getElementById("householdTable");
    console.log(table);
    rows.sort((prev, current) => {
        const prevD = new Date(prev.date);
        const currentD = new Date(current.date);
        if (prevD.valueOf() < currentD.valueOf()) {
            return -1;
        } else if (prevD.valueOf() > currentD.valueOf()) {
            return 1;
        }
        return 0;
    });
    rows.forEach((row, index) => {
        const columns = Object.keys(row);
        const tags = {};
        columns.forEach((column) => {
            const tag = document.createElement("SPAN");
            tag.innerText = row[column];
            tag.classList.add(...["household__table-data", `row-${index % 2 === 1? "old": "even"}`]);
            tags[column] = tag;
        });
        table.appendChild(tags["date"]);
        table.appendChild(tags["place"]);
        table.appendChild(tags["category"]);
        table.appendChild(tags["category2"]);
        table.appendChild(tags["amount"]);
    });
};

householdLoad();