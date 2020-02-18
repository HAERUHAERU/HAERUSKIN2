let removeToast;

function toast(string) {
    const toast = document.getElementById("toast");

    toast.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function() {
            document.getElementById("toast").classList.remove("reveal")
        }, 3000)) :
        removeToast = setTimeout(function() {
            document.getElementById("toast").classList.remove("reveal")
        }, 3000)
    toast.classList.add("reveal"),
        toast.innerText = string
}

var lastData = null,
    lastDPS = null,
    lastHPS = null,
    langFlag = '',
    list = '';ㅃ
var barSize = [];
var encounterArray = [];
var encounterCount = 1;
$(document).ready(function() {
    //localStorage.clear();
    var value = {
        lang: 1,
        tab: 'BM',
        size: 2,
        thema: 1,
        graph: 1,
        opacity: 3,
        number: 1,
        pets: 1,
        name: 1
    }
    if (!localStorage.getItem('list')) {
        localStorage.setItem('list', JSON.stringify(lang.elements))
    }
    list = JSON.parse(localStorage.getItem('list'))
    for (var i in value) {
        if (!localStorage.getItem(i))
            localStorage.setItem(i, value[i]);
        switch (i) {
            case 'tab':
                viewTab(localStorage.getItem('tab'), 'init');
                break;
            case 'number':
            case 'pets':
            case 'name':
            case 'lang':
                if (localStorage.getItem(i) == 1) {
                    $('#' + i).find('input').prop('checked', true);
                } else {
                    $('#' + i).find('input').prop('checked', false);
                }
                break;
        }
    }
    swapLang(localStorage.getItem("lang"));
    $('#wrap').css('height', 'calc(100% - ' + ($('.navbar-fixed').height() / 10 - 0.1) + 'rem)')
    $('#data font, #menuTable td div').css('color', lang['thema'][localStorage.getItem('thema')].color);
    $('.nav,.tableHeader').css('background', bgColor());
});
$('.nav').on({
    mouseover: function() {
        $('.nav,.tableHeader').css('background', 'rgba(26,26,26,1)');
    },
    mouseleave: function() {
        if ($('#menu').find('input').prop('checked') == true || $('#edit div').html() == '★')
            $('.nav,.tableHeader').css('background', 'rgba(26,26,26,1)');
        else
            $('.nav,.tableHeader').css('background', bgColor())
    }
});
$(window).resize(function() {
    $('#wrap').css('height', 'calc(100% - ' + ($('.navbar-fixed').height() / 10 - 0.1) + 'rem)')
});

function swapLang(val) {
    var tmp = '';
    if (val == 0) {
        tmp = '_en'
        langFlag = 'en'
    } else {
        tmp = ''
        langFlag = 'kr'
    }
    for (var i in lang) {
        $('#' + i).find('img').attr('src', 'images/ui/' + i + tmp + '.svg');
        if (lang[i][langFlag] != undefined) {
            $('#' + i).find('div').text(lang[i][langFlag]);
        } else {
            if (i == 'size' || i == 'opacity' || i == 'lang')
                $('#' + i).find('div').text(lang[i][localStorage.getItem(i)]);
            else if (i == 'DPS' || i == 'HPS' || i == 'BM' || i == 'edit') {} else if (i == 'elements')
                createEditTable()
            else
                $('#' + i).find('div').text(lang[i][localStorage.getItem(i)][langFlag]);
        }
    }
    $('#menuTable tr:first div').text('');
    $('#' + localStorage.getItem('tab')).find('div').text('★');
}

function viewTab(val, flag) {
    if (val == 'edit') {
        createEditTable();
        $('#zone').css('background', 'transparent');
        $('#menu').find('input').prop('checked', true)
        Button('menu', 0);
        $('#menu img').attr('src', 'images/ui/close.svg');
        $('#wrap').css('height', 'calc(100% - ' + ($('.navbar-fixed').height() / 10 - 0.1) + 'rem)')
    } else {
        $('#menu').find('input').prop('checked', true)
        Button('menu', 0);
    }
    $('#Header>div,#Body>div').css("display", "none");
    $('#' + val + 'Header,#' + val + 'Body').fadeIn(150);
    $('#menuTable tr:first div').text('');
    $('#' + val).find('div').text('★');
    if (val != 'history' && val != 'edit') {
        localStorage.setItem('tab', val);
        update();
        $('nav').trigger('mouseleave');
    } else
        $('nav').trigger('mouseover');
}

function createEditTable() {
    var html = '';
    for (var i in list) {
        var a = list[i]
        var div = '<div id="' + i + '"><table class="tablebody edit"><tr>' +
            '<td class="cell_1"><div class="title">' + a.title + '</div>' +
            '<div class="ex">' + lang.elements[i].ex[langFlag] + '</div></td>' +
            '<td class="cell_2" name="DPS"><img src="images/ui/check_' + a.DPS + '.svg"></td>' +
            '<td class="cell_2" name="HPS"><img src="images/ui/check_' + a.HPS + '.svg"></td>' +
            '<td class="cell_2" name="BM"><img src="images/ui/check_' + a.BM + '.svg"></td></tr></table><div class="editbg"></div><div class="divider"></div></div>'
        html += div;
    }
    $('#editBody').html(html)
    $('.tablebody.edit td.cell_2').on('click', function() {
        var key = $(this).parent().parent().parent().parent().attr('id')
        if ($(this).find('img').attr('src').split('_')[1] == 'true.svg') {
            list[key][$(this).attr('name')] = false
            $(this).find('img').attr('src', 'images/ui/check_false.svg');
        } else if ($(this).find('img').attr('src').split('_')[1] == 'false.svg') {
            list[key][$(this).attr('name')] = true
            $(this).find('img').attr('src', 'images/ui/check_true.svg');
        } else {}
        localStorage.setItem('list', JSON.stringify(list))
    });
}

function Button(id, num) {
    $('#' + id + ' img').removeClass('pulse animated').addClass('pulse animated').one('animationend', function() {
        $(this).removeClass('pulse animated');
    });
    switch (id) {
        case 'screenshot':
            window.OverlayPluginApi.makeScreenshot();
            toast("스크린샷은 Advanced Combat Tracker > ScreenShot 폴더에서 확인할 수 있습니다.")
            break;
        case 'menu':
            if ($('#' + id).find('input').prop('checked') == false) {
                $('#' + id).find('input').prop('checked', true);
                if ($('#edit div').html() == '★') {
                    Button('menu')
                    viewTab(localStorage.getItem('tab'))
                } else {
                    $('#Header,#Body').css('display', 'none');
                    $('#menuTable').show();
                    $('#menuTable').addClass("animated slideInDown");
                    $('#menu img').attr('src', 'images/ui/close.svg');
                    $('.navbar-fixed').css('height', '3.4rem');
                    $('#zone').css('background', 'transparent');
                    $('#wrap').css('height', 'calc(100% - ' + ($('.navbar-fixed').height() / 10 - 0.1) + 'rem)')
                }
            } else {
                $('#' + id).find('input').prop('checked', false);
                $('#menuTable').hide();
                $('#menuTable').removeClass("animated slideInDown");
                $('#menu img').attr('src', 'images/ui/menu.svg');
                $('.navbar-fixed').css('height', '4.9rem');
                $('#Header,#Body').fadeIn(150);
                if (localStorage.getItem("thema") == 5)
                    $('#zone').css('background', 'transparent');
                else {
                    $('#zone').css({
                        'background-image': 'url(./images/handle.svg)',
                        'background-size': '1rem 1rem',
                        'background-position': 'bottom right',
                        'background-repeat': 'no-repeat',
                        'background-attachment': 'fixed'
                    });
                }
                update();
            }
            break;
        case 'history':
            if ($('#' + id).find('input').prop('checked') == false) {
                $('#history img').attr('src', 'images/ui/close.svg');
                $('#Body').find('.barBg').css('background', bgColor())
                $('#' + id).find('input').prop('checked', true);
                $('#wrap').css('height', 'calc(100% - ' + ($('.navbar-fixed').height() / 10 - 0.1) + 'rem)')
            } else {
                $('#' + id + 'Header,#' + id + 'Body').css("display", "none");
                $('#' + localStorage.getItem('tab') + 'Header,#' + localStorage.getItem('tab') + 'Body').fadeIn(150);
                $('#menuTable tr:first div').text('');
                $('#' + localStorage.getItem('tab')).find('div').text('★');
                $('#history img').attr('src', 'images/ui/history.svg');
                $('#' + id).find('input').prop('checked', false);
            }
            break;
        case 'end':
            window.OverlayPluginApi.endEncounter();
            break;
        case 'number':
        case 'pets':
        case 'name':
        case 'lang': // 2 
            if ($('#' + id).find('input').prop('checked') == false) {
                localStorage.setItem(id, 1);
                $('#' + id).find('input').prop('checked', true);
                $('#' + id).find('div').text(lang[id][1][langFlag]);
                if (id == 'lang')
                    swapLang(localStorage.getItem("lang"));
            } else {
                localStorage.setItem(id, 0);
                $('#' + id).find('input').prop('checked', false);
                $('#' + id).find('div').text(lang[id][0][langFlag]);
                if (id == 'lang')
                    swapLang(localStorage.getItem("lang"));
            }
            break;
        case 'graph':
        case 'thema':
            if (localStorage.getItem(id) == num) {
                localStorage.setItem(id, 1);
                $('#' + id).find('div').text(lang[id][1][langFlag]);
            } else {
                localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
                $('#' + id).find('div').text(lang[id][localStorage.getItem(id)][langFlag]);
            }
            if (id == 'thema')
                $('#data font, #menuTable td div').css('color', lang[id][localStorage.getItem(id)].color);
            break;
        case 'opacity':
        case 'size':
            if (localStorage.getItem(id) == num) {
                localStorage.setItem(id, 1);
                $('#' + id).find('div').text(lang[id][1]);
            } else {
                localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
                $('#' + id).find('div').text(lang[id][localStorage.getItem(id)]);
            }
            if (id == 'size')
                $('html').css('font-size', lang['size'][localStorage.getItem('size')]);
            break;
    }
}
document.addEventListener("onOverlayDataUpdate", function(e) {
    lastData = e.detail;
    update();
    saveLog();
});

function update() {
    if (lastData === null) return;
    else {
        lastDPS = new LastHaeruData(lastData, 'DPS');
        lastHPS = new LastHaeruData(lastData, 'HPS');
        list = JSON.parse(localStorage.getItem('list'))
        onCombatDataUpdate(localStorage.getItem('tab'));
        $('html').css('font-size', lang['size'][localStorage.getItem('size')]);
        $('nav').trigger('mouseleave');
    }
}

function onCombatDataUpdate(flag) {
    if (flag == 'HPS') last = lastHPS;
    else last = lastDPS;
    var myRank = 0,
        party = 0;
    if (last.Combatant["YOU"] != undefined || last.Combatant["YOU"] != null) {
        var tableHeader = document.getElementById(flag + "Header");
        var oldHeader = document.getElementById(flag + "oldHeader");
        var newHeader = document.createElement("div");
        createTableHeader(newHeader, a);
        tableHeader.replaceChild(newHeader, oldHeader);
        newHeader.id = flag + 'oldHeader';

        var tableBody = document.getElementById(flag + "Body");
        var oldBody = document.getElementById(flag + "oldBody");
        var newBody = document.createElement("div");
        for (var d in last.Combatant) {
            var a = last.Combatant[d].merged;
            if (localStorage.getItem('pets') == 1 && a.Job == 'AVA' || a.Job == '' || a.Job == 'error') {} else {
                createTableBody(newBody, a);
                party++;
                if (a.Name == "YOU")
                    myRank = party;
            }
        }
        tableBody.replaceChild(newBody, oldBody);
        newBody.id = flag + 'oldBody';

        for (var d in last.Combatant) {
            var a = last.Combatant[d].merged;
            var b = last.Combatant[d].Haeru;
            if (localStorage.getItem('pets') == 1 && a.Job == 'AVA' || a.Job == '' || a.Job == 'error') {} else {
                inputGraph(last.maxDamage, a, b, flag);
            }
        }
    }
    $('#data').html("<font>" + lastData.Encounter.duration + "</font> " + lastData.Encounter.title + '　<font>RD</font> ' + addComma(last.RDPS) + '　<font>RH</font> ' + addComma(last.RHPS) + '　<font>(' + myRank + '/' + party + ')</font>');
    $('#data font, #menuTable td div').css('color', lang['thema'][localStorage.getItem('thema')].color);
}

function createTableHeader(newHeader, a) {
    var tableHeader = document.createElement("TABLE");
    tableHeader.className = "tableHeader";
    var tr = tableHeader.insertRow();
    for (var i in list) {
        if (list[i][localStorage.getItem('tab')] == true) {
            var td = tr.insertCell();
            td.innerHTML = list[i].title;
            td.className = addClassName(i, td);
        }
    }
    newHeader.appendChild(tableHeader)
}

function createTableBody(newBody, a) {
    var wrap = document.createElement("div");
    wrap.id = a.Name.replace(/ /g, "").replace("(", "").replace(")", "").replace(/'/g, "_");
    if ((a.Job == "AVA" || a.Job == "CBO") && myName == a.Name.split('(')[1].replace(')', '')) {
        wrap.className = "myPet";
    }
    var table = document.createElement("TABLE");
    table.className = "tableBody";
    var bar = document.createElement("div");
    bar.className = "bar";
    var bar1 = document.createElement("div");
    bar1.className = "pet";
    wrap.appendChild(bar1);
    if (localStorage.getItem('tab') == "HPS") {
        var bar1 = document.createElement("div");
        bar1.className = "oh";
        wrap.appendChild(bar1);
        var bar2 = document.createElement("div");
        bar2.className = "ds";
        wrap.appendChild(bar2);
        var bar3 = document.createElement("div");
        bar3.className = "pet";
        wrap.appendChild(bar3);
    }
    var barBg = document.createElement("div");
    barBg.className = "barBg";
    var tr = table.insertRow();
    var line = document.createElement("li");
    line.className = "divider";
    for (var i in list) {
        if (list[i][localStorage.getItem('tab')] == true) {
            var td = tr.insertCell();
            td.innerHTML = addData(i, td, a);
            td.className = addClassName(i, td) + ' ' + i;
        }
    }
    wrap.appendChild(table);
    wrap.appendChild(bar);
    wrap.appendChild(barBg);
    wrap.appendChild(line);
    newBody.appendChild(wrap)
}

function addData(name, td, a) {
    switch (name) {
        case 'Job':
            if (a[name] != undefined) return '<img src="./images/glow/' + a[name].toLowerCase() + '.png" class="pngIcon"/>';
            else return ''
        case 'Name':
            if (localStorage.getItem("name") == 1) {
                return a[name];
            } else {
                if (a[name] == "YOU") {
                    return a[name];
                } else {
                    if (a.petOwner == myName) {
                        if (a.Job == "CBO")
                            return '초코보 (YOU)';
                        else
                            return a.Name.split('(')[0] + '(YOU)';
                    } else {
                        if (a.Job == "LMB")
                            return 'Limit Break'
                        return '';
                    }
                }
            }
        case 'Time':
        case 'PTime':
        case 'PARRY':
        case 'BLOCK':
            return a[name];
        case 'PDPS':
        case 'Last10':
        case 'Last30':
        case 'Last60':
        case 'Last180':
        case 'DPS':
        case 'HPS':
            if (a[name] > 10000) return addComma((a[name] / 1000).toFixed(2 * localStorage.getItem('number'))) + 'k'
            else return addComma(a[name].toFixed(2 * localStorage.getItem('number')));
        case 'Damage':
        case 'Swing':
        case 'Hit':
        case 'DHit':
        case 'CHit':
        case 'CDHit':
        case 'Miss':
        case 'Avoid':
        case 'DTaken':
        case 'HTaken':
        case 'Healed':
        case 'EffHeal':
        case 'DShield':
        case 'OverHeal':
        case 'Heal':
        case 'CHeal':
        case 'Dispel':
        case 'Absorb':
        case 'Replenish':
        case 'Death':
            if (a[name] > 1000000) return addComma((a[name] / 1000).toFixed(0)) + 'k';
            else return addComma(a[name]);
        case 'MaxHit':
            return addComma(a.MaxHitVal) + '<font class="ex"> / ' + a.MaxHitStr + '</font>';
        case 'MaxHeal':
            return addComma(a.MaxHealVal) + '<font class="ex"> / ' + a.MaxHealStr + '</font>';
        default:
            return addComma(a[name].toFixed(1 * localStorage.getItem('number'))) + '<font class="ex">%</font>';
    }
}

function addComma(num) {
    if (num == 'NaN' || num == undefined || num == Infinity || num == '--') return 0;
    else return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function addClassName(name, td) {
    if (name == 'Job') return 'cell_0'
    else if (name == 'Name') return 'cell_1'
    else if (name == 'DPS' || name == 'HPS' || name == 'PDPS' || name == 'Last10' || name == 'Last30' || name == 'Last60' || name == 'Last180') return 'cell_2'
    else if (name == 'Damage' || name == 'DTaken' || name == 'HTaken' || name == 'Healed' || name == 'EffHeal' || name == 'DShield' || name == 'OverHeal' || name == 'Absorb' || name == 'Replenish') return 'cell_3'
    else if (name == 'MaxHeal' || name == 'MaxHit') return 'cell_4'
    else return 'cell_5'
}

function inputGraph(maxDamage, a, b, flag) {
    //info a=merge, b=owner 
    var userName = a.Name.replace(/ /g, "").replace("(", "").replace(")", "").replace(/'/g, "_");
    if (flag == 'DPS' || flag == 'BM')
        var userWidth = parseInt((a.Damage / maxDamage) * 100);
    else {
        var userWidth = parseInt((a.Healed / maxDamage) * 100);
        var overheal = Math.min(100, parseInt((a.OverHeal / maxDamage) * 100))
        var shield = Math.min(100, parseInt((a.DShield / maxDamage) * 100))
    }
    graphAnimate(userWidth, 'bar', '', flag, userName)

    if (localStorage.getItem('pets') == 1) {
        if (flag == 'DPS' || flag == 'BM') {
            var petWidth = Math.min(100, parseInt((a.Damage - b.Damage) / maxDamage * 100))
            graphAnimate(petWidth, 'pet', 'pet', flag, userName)
        } else {
            var fairyEffHeal = parseInt(a.EffHeal - b.EffHeal)
            var petWidth = Math.min(100, parseInt((fairyEffHeal / maxDamage) * 100))
            graphAnimate(petWidth, 'pet', 'pet', flag, userName)
            graphAnimate(shield, 'ds', 'ds', flag, userName)
            graphAnimate(overheal, 'oh', 'oh', flag, userName)
        }
    } else {
        if (flag == 'HPS') {
            graphAnimate(shield, 'ds', 'ds', flag, userName)
            graphAnimate(overheal, 'oh', 'oh', flag, userName)
        }
    }
    //graph style and thema
    if (localStorage.getItem('graph') == 1)
        $('#' + flag + 'Body').find('#' + userName).find('.bar').css('background', graphColor(a.Class, userName));
    else if (localStorage.getItem('graph') == 2) {
        $('#' + flag + 'Body').find('#' + userName).find('.bar').css('background', '-webkit-gradient(linear, left top,right top, color-stop(0.6,' + graphColor(a.Class, userName) + '), to(rgba(24,24,24,0)))');
        if ((userName.indexOf("YOU") > -1 || userName.indexOf(myName) > -1) && localStorage.getItem('thema') == 7)
            $('#' + flag + 'Body').find('#' + userName).find('.bar').css('background', 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet, transparent)');
    } else {
        $('#' + flag + 'Body').find('#' + userName).find('.bar').css({ background: graphColor(a.Class, userName), height: '1px', 'margin-top': '2.2rem' });
        $('#' + flag + 'Body').find('#' + userName).find('.pet, .oh, .ds').css({ height: '1px', 'margin-top': '2.2rem' });
    }
    //opacity
    $('#' + flag + 'Body').find('#' + userName).find('.bar, .pet, .oh, .ds').css('opacity', parseInt(localStorage.getItem('opacity')) * 0.2)
    $('#' + flag + 'Body').find('#' + userName).find('.barBg').css('opacity', parseInt(localStorage.getItem('opacity')) * 0.25 - 0.25)

    //Header
    $('.tableHeader td, .nav').css('background', bgColor());
}

function graphAnimate(width, bar, category, flag, userName) {
    if (barSize[userName + category + flag] == undefined) {
        $('#' + flag + 'Body').find('#' + userName).find('.' + bar).css('width', 0 + '%');
        barSize[userName + category + flag] = 0;
    } else {
        $('#' + flag + 'Body').find('#' + userName).find('.' + bar).css('width', parseInt(barSize[userName + category + flag]) + '%');
    }
    $('#' + flag + 'Body').find('#' + userName).find('.' + bar).animate({ width: width + '%' });
    barSize[userName + category + flag] = width;
}

function graphColor(Job, Name) {
    if (localStorage.getItem('thema') == 1) {
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#7B9AA2'
            case 'WAR':
            case 'MRD':
                return '#A91A16'
            case 'DRK':
                return '#682531'
            case 'GNB':
                return '#796D30'
            case 'WHM':
            case 'CNJ':
                return '#BDBDBD'
            case 'SCH':
                return '#32307B'
            case 'AST':
                return '#B1561C'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#B38915'
            case 'DRG':
            case 'LNC':
                return '#3752D8'
            case 'NIN':
            case 'ROG':
                return '#EE2E48'
            case 'SAM':
                return '#E45A0F'
            case 'BLM':
            case 'THM':
                return '#674598'
            case 'SMN':
            case 'ACN':
                return '#32670B'
            case 'RDM':
                return '#AC2997'
            case 'BLU':
                return '#183D9A'
            case 'BRD':
            case 'ARC':
                return '#ADC551'
            case 'MCH':
                return '#148AA9'
            case 'DNC':
                return '#E2B0AF'
            case 'LMB':
                return '#FFBB00'
            case 'CBO':
                return '#757575'
            default:
                return '#353535'
        }
    } else if (localStorage.getItem('thema') == 2) {
        $('#Body .barBg, .tableHeader, .nav').css('background', 'rgba(255,255,255, .1)')
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#bdd2cb'
            case 'WAR':
            case 'MRD':
                return '#f8a185'
            case 'DRK':
                return '#e9c2c7'
            case 'GNB':
                return '#a49e7c'
            case 'WHM':
            case 'CNJ':
                return '#f3f5e7'
            case 'SCH':
                return '#b8b8d4'
            case 'AST':
                return '#e5b99d'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#cec0a3'
            case 'DRG':
            case 'LNC':
                return '#abc3e5'
            case 'NIN':
            case 'ROG':
                return '#fbc1b3'
            case 'SAM':
                return '#fec983'
            case 'BLM':
            case 'THM':
                return '#c9b8da'
            case 'SMN':
            case 'ACN':
                return '#82c99d'
            case 'RDM':
                return '#f7bdcb'
            case 'BLU':
                return '#4db3fd'
            case 'BRD':
            case 'ARC':
                return '#d4e5a1'
            case 'MCH':
                return '#a2d5c6'
            case 'DNC':
                return '#f3cecd'
            case 'LMB':
                return '#fdf5a4'
            case 'CBO':
                return '#b8b8b8'
            default:
                return '#6e6e6e'
        }
    } else if (localStorage.getItem('thema') == 3) {
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
            case 'WAR':
            case 'MRD':
            case 'DRK':
            case 'GNB':
                return '#475ece'
            case 'WHM':
            case 'CNJ':
            case 'SCH':
            case 'AST':
                return '#467837'
            case 'MNK':
            case 'PGL':
            case "PUG":
            case 'DRG':
            case 'LNC':
            case 'SAM':
            case 'BLM':
            case 'THM':
            case 'SMN':
            case 'ACN':
            case 'RDM':
            case 'BLU':
            case 'BRD':
            case 'ARC':
            case 'MCH':
            case 'DNC':
            case 'NIN':
            case 'ROG':
                return '#813b3c'
            case 'LMB':
                return '#FFBB00'
            case 'CBO':
                return '#757575'
            default:
                return '#353535'
        }
    } else if (localStorage.getItem('thema') == 4) {
        if (Name.indexOf("YOU") > -1 || Name.indexOf(myName) > -1) return '#0db9ab'
        else return '#361e11'
    } else if (localStorage.getItem('thema') == 5) {
        $('#Body').find('.barBg, .bar, .pet, .ds, .oh').css('background', 'rgba(0,0,0,0)')
        $('#Body .divider').css('background', 'rgba(255,255,255,.1)')
        $('.nav, .tableHeader').css('background', 'rgba(0,0,0,0)')
        $('.DPS, .HPS').css('color', '#68efad');
        $('.Death').css('color', '#ff5252');
        $('#Body').find('#YOU .tableBody td, .myPet .tableBody td').css('color', '#EEFF41');
        $('#zone').css('background', 'transparent');
    } else if (localStorage.getItem('thema') == 6) {
        $('#Body .barBg, .tableHeader, .nav').css('background', 'rgba(255,255,255, .1)')
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#fda4ba'
            case 'WAR':
            case 'MRD':
                return '#fec5e5'
            case 'DRK':
                return '#f69acd'
            case 'GNB':
                return '#da86b4'
            case 'WHM':
            case 'CNJ':
                return '#fb9483'
            case 'SCH':
                return '#fdab9f'
            case 'AST':
                return '#f2b8c6'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#fa86c3'
            case 'DRG':
            case 'LNC':
                return '#ff1695'
            case 'NIN':
            case 'ROG':
                return '#fc46aa'
            case 'SAM':
                return '#fe5da9'
            case 'BLM':
            case 'THM':
                return '#f25278'
            case 'SMN':
            case 'ACN':
                return '#f26b8b'
            case 'RDM':
                return '#f69abf'
            case 'BLU':
                return '#ec8fa5'
            case 'BRD':
            case 'ARC':
                return '#fe7f9c'
            case 'MCH':
                return '#fc94af'
            case 'DNC':
                return '#e8acd2'
            case 'LMB':
                return '#fc4c4e'
            case 'CBO':
                return '#9e4245'
            default:
                return '#6e6e6e'
        }
    } else if (localStorage.getItem('thema') == 7) {
        $('#Body').find('.barBg').css('background', 'rgba(0,0,0,0.1)')
        if (Name.indexOf("YOU") > -1 || Name.indexOf(myName) > -1)
            return 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)'
        else
            return '#EAEAEA'
    }
}

function bgColor() {
    if (localStorage.getItem("thema") == 2 || localStorage.getItem("thema") == 6)
        return 'rgba(255,255,255,0.1)'
    else if (localStorage.getItem("thema") == 5)
        return 'rgba(26,26,26,0)'
    else if (localStorage.getItem("thema") == 7)
        return 'rgba(0,0,0,0.1)'
    else if (localStorage.getItem("thema") == 4)
        return 'rgba(54,30,17,' + (parseInt(localStorage.getItem('opacity')) * 0.25 - 0.25) + ')'
    else
        return 'rgba(26,26,26,' + (parseInt(localStorage.getItem('opacity')) * 0.25 - 0.25) + ')'
}

function saveLog() {
    if (lastDPS == null)
        return;
    else {
        if (lastDPS.title != 'Encounter') {
            encounterArray.unshift({
                lastData: lastData,
                combatKey: lastDPS.combatKey
            });
            if (encounterArray.length >= 2) {
                if (encounterArray[1].combatKey == lastDPS.combatKey)
                    encounterArray.shift()
                else historyAddRow()
            } else historyAddRow()
            barSize = new Array(); //초기화            
        }
    }
}

function historyAddRow() {
    var wrap = document.getElementById('historyBody');
    var newHistory = document.createElement("div");
    var oldHistory = document.getElementById('historyoldBody');
    $('#historyBody').find('td#viewIcon').html('');
    var table = document.createElement("TABLE");
    table.id = lastDPS.combatKey;
    table.className = "tableBody";
    var tr = table.insertRow();
    var td = tr.insertCell();
    td.innerHTML = '<img src="./images/ui/eye.svg" style="width:1.5rem"/>';
    td.className = "cell_0";
    td.id = "viewIcon";
    var td = tr.insertCell();
    td.innerHTML = lastDPS.title + '<span class="ex"> / ' + lastDPS.zone + '</span>';
    td.className = "cell_1";
    var td = tr.insertCell();
    td.innerHTML = lastData.Encounter.duration;
    td.className = "cell_5";
    var td = tr.insertCell();
    td.innerText = addComma(parseFloat(lastData.Encounter.ENCDPS));
    td.className = "cell_2";
    td.id = "RDPS";
    var td = tr.insertCell();
    td.innerText = addComma(parseFloat(lastData.Encounter.ENCHPS));
    td.className = "cell_2";
    td.id = "RHPS";
    var td = tr.insertCell();
    td.className = "cell_5";
    td.id = "CNT";
    var line = document.createElement("li");
    line.className = "divider";
    if (encounterArray.length == 1)
        td.innerText = 1;
    else {
        if (encounterArray[0].lastData.Encounter.CurrentZoneName == encounterArray[1].lastData.Encounter.CurrentZoneName) {
            encounterCount++;
            td.innerText = addComma(parseInt(encounterCount))
        } else {
            encounterCount = 1;
            td.innerText = encounterCount
        }
    }
    var barBg = document.createElement("div");
    barBg.className = "barBg";
    newHistory.appendChild(table);
    newHistory.appendChild(barBg);
    newHistory.appendChild(line);
    if (oldHistory == null)
        wrap.appendChild(newHistory);
    else wrap.insertBefore(newHistory, oldHistory);
    newHistory.id = 'historyoldBody';
    $('#historyoldBody').on({
        mouseover: function() {
            $(this).find('.barBg').css('background', lang.thema[localStorage.getItem('thema')].color)
        },
        mouseleave: function() {
            $(this).find('.barBg').css('background', bgColor())
        },
        click: function() {
            $('#historyBody').find('td#viewIcon').html('');
            var listName = $(this).find('table').attr("id");
            for (var i in encounterArray) {
                if (listName == encounterArray[i].combatKey) {
                    lastData = encounterArray[i].lastData;
                    $(this).find('#viewIcon').html('<img src="./images/ui/eye.svg" style="width:1.5rem"/>');
                    $('#DPSBody').html('<div id="DPSoldBody"></div>');
                    $('#HPSBody').html('<div id="HPSoldBody"></div>');
                    $('#BMBody').html('<div id="BMoldBody"></div>');
                    viewTab(localStorage.getItem("tab"), 'init');
                    Button('history');
                }
            }
        }
    })
}
