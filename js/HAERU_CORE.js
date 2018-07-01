var myName = "-";
Number.prototype.nanFix = function () {
    if (this == "" || this == undefined || this == Infinity || this == "--")
        return 0;
    else
        return parseFloat(isNaN(this) ? 0 : this);
};

function LastHaeruData(e, sortkey) {
    this.duration = e.Encounter.duration;
    this.title = e.Encounter.title;
    this.zone = e.Encounter.CurrentZoneName;
    this.RDPS = parseInt(e.Encounter.ENCDPS).nanFix();
    this.RHPS = parseInt(e.Encounter.ENCHPS).nanFix();
    this.Combatant = getData(e, localStorage.getItem("pets"), sortkey);
    this.maxDamage = 0;
    this.combatKey = e.Encounter.title + e.Encounter.damage + e.Encounter.healed;
    var tmp = new Array();
    for (var i in this.Combatant) {
        var a = this.Combatant[i].merged;
        if (a.Job == "AVA" || a.Job == "CBO") {
            tmp.push(a.petOwner);
        } else if (a.Job == "SMN" || a.Job == "MCH" || a.Job == "SCH") {
            tmp.push(a.Name);
        }
    }
    //get my Name 
    for (var i in this.Combatant) {
        var a = this.Combatant[i].merged;
        for (var j in tmp) {
            if (a.Name == tmp[j]) {
                delete tmp[j]
            }
        }
    }
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] != undefined) {
            myName = tmp[i];
            break;
        }
    }
    //get MaxDamage 
    for (var i in this.Combatant) {
        var a = this.Combatant[i].merged;
        if (sortkey == 'DPS') {
            if (this.maxDamage < a.Damage)
                this.maxDamage = a.Damage;
        }
        else {
            if (this.maxDamage < a.Healed)
                this.maxDamage = a.Healed;
        }
    }
}
function getData(d, pets, sortkey) {
    var member = d.Combatant;
    var encounter = d.Encounter;
    for (var i in member) {
        member[i].Haeru = new HaeruData(member[i], encounter);
        member[i].merged = new HaeruData(member[i], encounter);
    }
    if (pets == 1) {
        putPetOwner(member);
        for (var i in member) {
            if (member[i].Haeru.Job == "AVA") {
                if (member[member[i].Haeru.petOwner] != null || member[member[i].Haeru.petOwner] != undefined)
                    mergedData(member[i].Haeru, member[member[i].Haeru.petOwner].merged, encounter);
            }
        }
    }
    return sortObject(member, sortkey);
}
function HaeruData(d, e) {
    if (d.Job == "") {
        //var schPets = ["요정", "Eos", "Selene", "フェアリー", "小仙女"];
        //var smnPets = ["에기", "카벙클", "Carbuncle", "Egi", "エギ", "カーバンクル", "데미바하무트", "Demi-Bahamut", "石兽", "亚灵神巴哈姆特", "Karfunkel"];
        //var mchPets = ["자동포탑", "Autoturret", "オートタレット", "Selbstschuss-Gyrocopter", "Auto-tourelle", "式浮空炮塔"];

        var regex = /(?:.*?)\((.*?)\)/im;
        var matches = d.name.match(regex);

        if (d.name.indexOf("에기") > -1 || d.name.indexOf("카벙클") > -1 || d.name.indexOf("데미바하무트") > -1 || d.name.indexOf("Egi") > -1 || d.name.indexOf("Demi-Bahamut") > -1 || d.name.indexOf("Carbuncle") > -1 || d.name.indexOf("Karfunkel") > -1 || d.name.indexOf("エギ") > -1 || d.name.indexOf("カーバンクル") > -1 || d.name.indexOf("石兽") > -1 || d.name.indexOf("亚灵神巴哈姆特") > -1) {
            this.Job = "AVA";
            this.Class = "SMN";
            if (matches != null)
                this.petOwner = matches[1];
        }
        else if (d.name.indexOf("요정") > -1 || d.name.indexOf("Eos") > -1 || d.name.indexOf("Selene") > -1 || d.name.indexOf("フェアリー") > -1 || d.name.indexOf("小仙女") > -1) {
            this.Job = "AVA";
            this.Class = "SCH";
            if (matches != null)
                this.petOwner = matches[1];
        }
        else if (d.name.indexOf("자동포탑") > -1 || d.name.indexOf("Autoturret") > -1 || d.name.indexOf("オートタレット") > -1 || d.name.indexOf("Selbstschuss-Gyrocopter") > -1 || d.name.indexOf("Auto-tourelle") > -1 || d.name.indexOf("式浮空炮塔") > -1) {
            this.Job = "AVA";
            this.Class = "MCH";
            if (matches != null)
                this.petOwner = matches[1];
        }
        else if (d.name.toUpperCase().indexOf("LIMIT BREAK") > -1 || d.name.indexOf("リミット") > -1) {
            this.Job = "LMB";
            this.Class = "LMB";
        }
        else if (d.name.indexOf("(") > -1 ){
            this.Job = "CBO";
            this.Class = "CBO";
            if (matches != null)
                this.petOwner = matches[1];
        }else{            
            this.Job = "error";
            this.Class = "error";
        }
    } else {
        if (d.Job != undefined) {
            this.Job = d.Job.toUpperCase();
            this.Class = d.Job.toUpperCase();
        }
        this.petOwner = "";
    }
    this.Name = d.name;
    this.DURATION = parseInt(d.DURATION);

    this.PTime = d.duration;
    this.PDPS = parseFloat(d.damage / d.DURATION).nanFix();
    this.Time = e.duration;
    this.DPS = parseFloat(d.damage / e.DURATION).nanFix();
    this.Last10 = parseFloat(d.Last10DPS).nanFix();
    this.Last30 = parseFloat(d.Last30DPS).nanFix();
    this.Last60 = parseFloat(d.Last60DPS).nanFix();
    this.Last180 = parseFloat(d.Last180DPS).nanFix();
    this.Dper = parseFloat(d.damage / e.damage * 100).nanFix();
    this.Damage = parseInt(d.damage).nanFix();
    this.ACC = parseFloat(d.misses / d.swings * 100).nanFix();
    this.Swing = parseInt(d.swings).nanFix();
    this.Hit = parseInt(d.hits).nanFix();
    this.DHit = parseInt(d.DirectHitCount).nanFix();
    this.DHIT = parseFloat(d.DirectHitCount / d.hits * 100).nanFix();
    this.CHit = parseInt(d.crithits).nanFix();
    this.CHIT = parseFloat(d.crithits / d.hits * 100).nanFix();
    this.CDHit = parseInt(d.CritDirectHitCount).nanFix();
    this.CDHIT = parseFloat(d.CritDirectHitCount / d.hits * 100).nanFix();
    this.Miss = parseInt(d.misses).nanFix();
    this.Avoid = parseInt(d.hitfailed).nanFix();
    if (d.maxhit == "") {
        this.MaxHitVal = 0;
        this.MaxHitStr = "";
    } else {
        this.MaxHitVal = parseInt(d.maxhit.split('-')[1].replace(/[^\d]+/g, '')).nanFix();
        this.MaxHitStr = d.maxhit.split('-')[0];
    }
    this.DTaken = parseInt(d.damagetaken).nanFix();
    this.HTaken = parseInt(d.healstaken).nanFix();
    this.PARRY = d.ParryPct;
    this.BLOCK = d.BlockPct;

    this.HPS = parseFloat(d.healed / e.DURATION).nanFix();
    this.Hper = parseFloat(d.healed / e.healed * 100).nanFix();
    this.Healed = parseInt(d.healed).nanFix();
    this.EffHeal = parseInt(d.healed).nanFix() - parseInt(d.overHeal).nanFix() - parseInt(d.damageShield).nanFix();
    this.DShield = parseInt(d.damageShield).nanFix();
    this.OverHeal = parseInt(d.overHeal).nanFix();
    this.OHEAL = parseFloat(d.overHeal / d.healed * 100).nanFix();
    this.Heal = parseInt(d.heals).nanFix();
    this.CHeal = parseInt(d.critheals).nanFix();
    this.CHEAL = parseFloat(d.critheals / d.heals * 100).nanFix();
    if (d.maxheal == "") {
        this.MaxHealVal = 0;
        this.MaxHealStr = "";
    } else {
        this.MaxHealVal = parseInt(d.maxheal.split('-')[1].replace(/[^\d]+/g, '')).nanFix();
        this.MaxHealStr = d.maxheal.split('-')[0];
    }
    this.Dispel = parseInt(d.cures).nanFix();
    this.Absorb = parseInt(d.absorbHeal).nanFix();
    this.Replenish = parseInt(d.powerheal).nanFix();
    this.Death = parseInt(d.deaths).nanFix();
}
function putPetOwner(d) {
    var nameList = [];
    for (var i in d) {
        if (d[i].Haeru.Job != "AVA" && d[i].Haeru.Job != "CBO")
            nameList.push(d[i].Haeru.Name);
    }
    for (var i in d) {
        if (d[i].Haeru.petOwner != "" && d[i].Haeru.petOwner != undefined) {
            if (nameList.indexOf(d[i].Haeru.Name.split("(")[1].replace(")", "")) > -1) {
                d[i].Haeru.petOwner = d[i].Haeru.Name.split("(")[1].replace(")", "");
            } else {
                d[i].Haeru.petOwner = "YOU";
            }
        }
    }
}
function mergedData(p, o, e) {
    o.DURATION = (o.DURATION >= p.DURATION) ? o.DURATION : p.DURATION;
    o.PTime = (o.DURATION >= p.DURATION) ? o.PTime : p.PTime;
    o.Damage = parseInt(o.Damage + p.Damage).nanFix();
    o.PDPS = parseFloat(o.Damage / o.DURATION).nanFix();
    o.DPS = parseFloat(o.Damage / e.DURATION).nanFix();
    o.Last10 = parseFloat(o.Last10).nanFix() + parseFloat(p.Last10).nanFix();
    o.Last30 = parseFloat(o.Last30).nanFix() + parseFloat(p.Last30).nanFix();
    o.Last60 = parseFloat(o.Last60).nanFix() + parseFloat(p.Last60).nanFix();
    o.Last180 = parseFloat(o.Last180).nanFix() + parseFloat(p.Last180).nanFix();
    o.Dper = parseFloat(o.Damage / e.damage * 100).nanFix();
    o.Swing = parseInt(o.Swing + p.Swing).nanFix();
    o.Miss = parseInt(o.Miss + p.Miss).nanFix();
    o.ACC = parseFloat(o.Miss / o.Swing * 100).nanFix();
    o.Hit = parseInt(o.Hit + p.Hit).nanFix();
    o.DHit = parseInt(o.DHit + p.DHit).nanFix();
    o.DHIT = parseFloat(o.DHit / o.Hit * 100).nanFix();
    o.CHit = parseInt(o.CHit + p.CHit).nanFix();
    o.CHIT = parseFloat(o.CHit / o.Hit * 100).nanFix();
    o.CDHit = parseInt(o.CDHit + p.CDHit).nanFix();
    o.CDHIT = parseFloat(o.CDHit / o.Hit * 100).nanFix();
    o.Avoid = parseInt(o.Avoid + p.Avoid).nanFix();

    if (o.MaxHitVal == 0 && p.MaxHitVal == 0) {
        o.MaxHitStr = "";
        o.MaxHitVal = 0;
    } else if (o.MaxHitVal <= p.MaxHitVal) {
        o.MaxHitStr = p.MaxHitStr;
        o.MaxHitVal = p.MaxHitVal;
    }

    o.Healed = parseInt(o.Healed + p.Healed).nanFix();
    o.HPS = parseFloat(o.Healed / e.DURATION).nanFix();
    o.Hper = parseFloat((o.Healed / e.healed) * 100).nanFix();
    o.DShield = parseInt(o.DShield + p.DShield).nanFix();
    o.OverHeal = parseInt(o.OverHeal + p.OverHeal).nanFix();
    o.EffHeal = parseInt(o.Healed).nanFix() - parseInt(o.OverHeal).nanFix() - parseInt(o.DShield).nanFix();

    o.OHEAL = parseFloat(o.OverHeal / o.Healed * 100).nanFix();
    o.Heal = parseInt(o.Heal + p.Heal).nanFix();
    o.CHeal = parseInt(o.CHeal + p.CHeal).nanFix();
    o.CHEAL = parseFloat(o.CHeal / o.Heal * 100).nanFix();

    if (o.MaxHealVal == 0 && p.MaxHealVal == 0) {
        o.MaxHealStr = "";
        o.MaxHealVal = 0;
    } else if (o.MaxHealVal <= p.MaxHealVal) {
        o.MaxHealStr = p.MaxHealStr;
        o.MaxHealVal = p.MaxHealVal;
    }

    o.Dispel = parseInt(o.Dispel + p.Dispel).nanFix();
    o.Absorb = parseInt(o.Absorb + p.Absorb).nanFix();
    o.Replenish = parseInt(o.Replenish + p.Replenish).nanFix();
}
function sortObject(d, sortkey) {
    var sorted = {},
        key, a = [];
    for (key in d) {
        if (d.hasOwnProperty(key)) a.push(key);
    }
    a.sort(function (a, b) {
        return d[b].merged[sortkey] - d[a].merged[sortkey];
    });
    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = d[a[key]];
    }
    return sorted;
}
