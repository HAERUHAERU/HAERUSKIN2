lang = {
    DPS: '',lang = {
    DPS: '',
    HPS: '',
    BM: '',
    edit: '',    
    data: {
        kr: '[★테마 추가★] 해루스킨 2 - 모그리/해루',
        en: 'HAERUSKIN 2 - KR Moogle/해루'
    },
    size: {
        1: '55.5%',
        2: '62.5%',
        3: '75%',
        4: '100%',
        5: '125%'
    },
    opacity: {
        1: '20% / 0%',
        2: '40% / 25%',
        3: '60% / 50%',
        4: '80% / 75%',
        5: '100% / 100%'
    },
    lang: {
        0: 'English',
        1: '한국어'
    },
    thema: {
        1: {
            kr: '소울 크리스탈',
            en: 'Soul Crystal',
            color: '#4FC3F7'
        },
        2: {
            kr: '파스텔',
            en: 'Pastel',
            color: '#FFAB91'
        },
        3: {
            kr: '역할',
            en: 'Role',            
            color: '#CDDC39'
        },
        4: {
            kr: '민트초코',
            en: 'Mint & Chocolate',            
            color: '#F4CE7B'
        },
        5: {
            kr: '임금님의 ACT',
            en: 'The Emperor\'s ACT',            
            color: '#B39DDB'
        },
        6: {
            kr: '핑크핑크해',
            en: 'Pink! Pink!',            
            color: '#fa86c3'
        },
        7: {
            kr: 'I ♥ SAM',
            en: 'I ♥ SAM',            
            color: '#ffbb00'
        },
        8: {
            kr: '화이트',
            en: 'White',            
            color: '#BDBDBD'
        }
    },
    graph: {
        1: {
            kr: '바',
            en: 'Bar'
        },
        2: {
            kr: '그라데이션',
            en: 'Gradient'
        },
        3: {
            kr: '언더라인',
            en: 'Underline'
        }
    },
    number: {
        0: {
            kr: '정수',
            en: 'Integer'
        },
        1: {
            kr: '소수',
            en: 'Decimal'
        }
    },
    pets: {
        0: {
            kr: '분리',
            en: 'Separate'
        },
        1: {
            kr: '합산',
            en: 'Combine'
        }
    },
    name: {
        0: {
            kr: '숨기기',
            en: 'Hide'
        },
        1: {
            kr: '보이기',
            en: 'Show'
        }
    },
    elements:{
        Job:{
            title:"Job",
            ex:{
                kr:'클래스 또는 직업 아이콘',
                en:'Player\'s class or job icon.'
            },
            DPS:true,
            HPS:true,
            BM:true
        },
        Name:{
            title:"Name",
            ex:{
                kr:'캐릭터 이름',
                en:'The combatant\'s name.'
            },
            DPS:true,
            HPS:true,
            BM:true            
        },
        PTime:{
            title:"P.Time",
            ex:{
                kr:'전투 로그 수집 시간 (내 첫 공격 기준)',
                en:'The duration of the combatant.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        PDPS:{
            title:"P.DPS",
            ex:{
                kr:'초당 피해량 (P.Time 기준)',
                en:'The damage total of the combatant divided by their personal duration.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        Time:{
            title:"Time",
            ex:{
                kr:'전투 로그 집계 시간 (파티 첫 공격 기준, 공식)',
                en:'The duration of the encounter.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        DPS:{
            title:"DPS",
            ex:{
                kr:'초당 피해량 (Time 기준, 공식)',
                en:'The damage total of the combatant divided by the duration of the encounter.<br>This is more commonly used than P.DPS'
            },
            DPS:true,
            HPS:'block',
            BM:true           
        },
        Last10:{
            title:"Last10",
            ex:{
                kr:'최근 10초간 평균 DPS',
                en:'Average DPS for last 10 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last30:{
            title:"Last30",
            ex:{
                kr:'최근 30초간 평균 DPS',
                en:'Average DPS for last 30 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last60:{
            title:"Last60",
            ex:{
                kr:'최근 60초간 평균 DPS',
                en:'Average DPS for last 60 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last180:{
            title:"Last180",
            ex:{
                kr:'최근 180초간 평균 DPS',
                en:'Average DPS for last 180 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Dper:{
            title:"D%",
            ex:{
                kr:'전체 피해량 중 내가 기여한 피해량 (%)',
                en:'This value represents the percent share of all damage done by allies in this encounter.'
            },
            DPS:true,
            HPS:'block',
            BM:false  
        },
        Damage:{
            title:"Damage",
            ex:{
                kr:'피해량',
                en:'The amount of damage.'
            },
            DPS:true,
            HPS:'block',
            BM:true  
        },
        ACC:{
            title:"ACC",
            ex:{
                kr:'명중률 (%)',
                en:'The percentage of hits to swings.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        Swing:{
            title:"Swing",
            ex:{
                kr:'공격 횟수 (자동 공격, 도트, 기술 시전 취소 포함)',
                en:'The number of attack attempts.<br>This includes any auto-attacks or abilities, also including resisted abilities that do no damage.'
            },
            DPS:true,
            HPS:'block',
            BM:true 
        },
        Hit:{
            title:"Hit",
            ex:{
                kr:'공격 적중 횟수',
                en:'The number of attack attempts that produced damage.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        DHit:{
            title:"D.Hit",
            ex:{
                kr:'직격 횟수',
                en:'The number of hits that were direct hit.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        DHIT:{
            title:"D.HIT",
            ex:{
                kr:'직격 발동률 (%)',
                en:'The percentage of hits that were direct hits.'
            },
            DPS:false,
            HPS:'block',
            BM:true  
        },
        CHit:{
            title:"C.Hit",
            ex:{
                kr:'공격 극대화 횟수',
                en:'The number of damaging attacks that were critical.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        CHIT:{
            title:"C.HIT",
            ex:{
                kr:'공격 극대화율 (%)',
                en:'The percentage of damaging attacks that were critical.'
            },
            DPS:true,
            HPS:'block',
            BM:true  
        },
        CDHit:{
            title:"C.D.Hit",
            ex:{
                kr:'직격 극대화 횟수',
                en:'The number of hits that were critical as well as direct hit.'
            },
            DPS:false,
            HPS:'block',
            BM:false 
        },
        CDHIT:{
            title:"C.D.HIT",
            ex:{
                kr:'직격 극대화율 (%)',
                en:'The percentage of hits that were direct hits as well as critical hits.'
            },
            DPS:false,
            HPS:'block',
            BM:true 
        },
        Miss:{
            title:"Miss",
            ex:{
                kr:'공격 빗나감 횟수',
                en:'The number of auto-attacks of CAs that produced a miss message.'
            },
            DPS:true,
            HPS:'block',
            BM:false 
        },        
        Avoid:{
            title:"Avoid",
            ex:{
                kr:'공격 실패 횟수 (적의 저항, 반사, 막기, 회피 등)',
                en:'Any type of failed attack that was not a miss.<br>This includes resists, reflects, blocks, dodging, etc.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },        
        MaxHit:{
            title:"MaxHit",
            ex:{
                kr:'최대 공격 기술',
                en:'The highest single damaging hit.'
            },
            DPS:true,
            HPS:'block',
            BM:true
        },       
        DTaken:{
            title:"D.Taken",
            ex:{
                kr:'받은 피해량',
                en:'The amount of damage this combatant received.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },       
        HTaken:{
            title:"H.Taken",
            ex:{
                kr:'받은 치유량',
                en:'The amount of healing this combatant received.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        PARRY:{
            title:"PARRY",
            ex:{
                kr:'받아넘기기 발동률 (%)',
                en:'The percentage of hits that were parried.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        BLOCK:{
            title:"BLOCK",
            ex:{
                kr:'방패막기 발동률 (%)',
                en:'The percentage of hits that were blocked.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        HPS:{
            title:"HPS",
            ex:{
                kr:'초당 치유량 (Time 기준, 공식)',
                en:'The healing total of the combatant divided by the duration of the encounter.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Hper:{
            title:"H%",
            ex:{
                kr:'전체 치유량 중 내가 기여한 치유량 (%)',
                en:'The value represents the percent share of all healing done by allies in this encounter.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Healed:{
            title:"Healed",
            ex:{
                kr:'치유량',
                en:'The amount of healing.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        EffHeal:{
            title:"Eff.Heal",
            ex:{
                kr:'유효 치유량',
                en:'The amount of healing except for Overheal and D.Shield value.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        DShield:{
            title:"D.Shield",
            ex:{
                kr:'보호막량',
                en:'The amount of damage blocked by shield abilities of healer.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        OverHeal:{
            title:"OverHeal",
            ex:{
                kr:'초과 치유량',
                en:'The amount of healing that made flood over 100% of health.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        OHEAL:{
            title:"O.HEAL",
            ex:{
                kr:'치유 초과율 (%)',
                en:'The percentage of heals above target\'s Max HP.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Heal:{
            title:"Heal",
            ex:{
                kr:'치유 횟수 (도트, 기술 시전 취소 포함)',
                en:'The number of heals from this combatant.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        CHeal:{
            title:"C.Heal",
            ex:{
                kr:'치유 극대화 횟수',
                en:'The number of heals that were critical.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        CHEAL:{
            title:"C.HEAL",
            ex:{
                kr:'치유 극대화율 (%)',
                en:'The percentage of heals that were critical.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        MaxHeal:{
            title:"MaxHeal",
            ex:{
                kr:'최대 치유 기술',
                en:'The highest single healing amount.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        Dispel:{
            title:"Dispel",
            ex:{
                kr:'디버프 해제 기술 시전 횟수',
                en:'The number of times the combatant dispelled.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        Absorb:{
            title:"Absorb",
            ex:{
                kr:'기술 시전을 통한 HP 보충량 (최후의 일격 등)',
                en:'The amount of power this combatant drained from others.<br>(ex. Mercy Stroke etc)'
            },
            DPS:false,
            HPS:false,
            BM:false
        },
        Replenish:{
            title:"Replenish",
            ex:{
                kr:'기술 시전을 통한 MP 보충량 (에테르 흡수 등)',
                en:'The amount of power this combatant replenished to others.<br>(ex. Aetherflow etc)'
            },
            DPS:false,
            HPS:false,
            BM:false
        },
        Death:{
            title:"Death",
            ex:{
                kr:'죽음 횟수',
                en:'The number of times this character was killed by another.'
            },
            DPS:true,
            HPS:false,
            BM:true
        }   
    }
}

    HPS: '',
    BM: '',
    edit: '',    
    data: {
        kr: '[영웅의 귀환] 해루스킨 2 - 모그리/해루',
        en: 'HAERUSKIN 2 - KR Moogle/해루'
    },
    size: {
        1: '55.5%',
        2: '62.5%',
        3: '75%',
        4: '100%',
        5: '125%',
        6: '150%',
        7: '175%',
        8: '200%',
    },
    opacity: {
        1: '20% / 0%',
        2: '40% / 25%',
        3: '60% / 50%',
        4: '80% / 75%',
        5: '100% / 100%'
    },
    lang: {
        0: 'English',
        1: '한국어'
    },
    thema: {
        1: {
            kr: '소울 크리스탈',
            en: 'Soul Crystal',
            color: '#4FC3F7'
        },
        2: {
            kr: '파스텔',
            en: 'Pastel',
            color: '#FFAB91'
        },
        3: {
            kr: '역할',
            en: 'Role',            
            color: '#CDDC39'
        },
        4: {
            kr: '민트초코',
            en: 'Mint & Chocolate',            
            color: '#F4CE7B'
        },
        5: {
            kr: '임금님의 ACT',
            en: 'The Emperor\'s ACT',            
            color: '#B39DDB'
        }
    },
    graph: {
        1: {
            kr: '바',
            en: 'Bar'
        },
        2: {
            kr: '그라데이션',
            en: 'Gradient'
        },
        3: {
            kr: '언더라인',
            en: 'Underline'
        }
    },
    number: {
        0: {
            kr: '정수',
            en: 'Integer'
        },
        1: {
            kr: '소수',
            en: 'Decimal'
        }
    },
    pets: {
        0: {
            kr: '분리',
            en: 'Separate'
        },
        1: {
            kr: '합산',
            en: 'Combine'
        }
    },
    name: {
        0: {
            kr: '숨기기',
            en: 'Hide'
        },
        1: {
            kr: '보이기',
            en: 'Show'
        }
    },
    elements:{
        Job:{
            title:"Job",
            ex:{
                kr:'클래스 또는 직업 아이콘',
                en:'Player\'s class or job icon.'
            },
            DPS:true,
            HPS:true,
            BM:true
        },
        Name:{
            title:"Name",
            ex:{
                kr:'캐릭터 이름',
                en:'The combatant\'s name.'
            },
            DPS:true,
            HPS:true,
            BM:true            
        },
        PTime:{
            title:"P.Time",
            ex:{
                kr:'전투 로그 수집 시간 (내 첫 공격 기준)',
                en:'The duration of the combatant.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        PDPS:{
            title:"P.DPS",
            ex:{
                kr:'초당 피해량 (P.Time 기준)',
                en:'The damage total of the combatant divided by their personal duration.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        Time:{
            title:"Time",
            ex:{
                kr:'전투 로그 집계 시간 (파티 첫 공격 기준, 공식)',
                en:'The duration of the encounter.'
            },
            DPS:false,
            HPS:'block',
            BM:false            
        },
        DPS:{
            title:"DPS",
            ex:{
                kr:'초당 피해량 (Time 기준, 공식)',
                en:'The damage total of the combatant divided by the duration of the encounter.<br>This is more commonly used than P.DPS'
            },
            DPS:true,
            HPS:'block',
            BM:true           
        },
        Last10:{
            title:"Last10",
            ex:{
                kr:'최근 10초간 평균 DPS',
                en:'Average DPS for last 10 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last30:{
            title:"Last30",
            ex:{
                kr:'최근 30초간 평균 DPS',
                en:'Average DPS for last 30 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last60:{
            title:"Last60",
            ex:{
                kr:'최근 60초간 평균 DPS',
                en:'Average DPS for last 60 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Last180:{
            title:"Last180",
            ex:{
                kr:'최근 180초간 평균 DPS',
                en:'Average DPS for last 180 seconds.'
            },
            DPS:false,
            HPS:'block',
            BM:false          
        },
        Dper:{
            title:"D%",
            ex:{
                kr:'전체 피해량 중 내가 기여한 피해량 (%)',
                en:'This value represents the percent share of all damage done by allies in this encounter.'
            },
            DPS:true,
            HPS:'block',
            BM:false  
        },
        Damage:{
            title:"Damage",
            ex:{
                kr:'피해량',
                en:'The amount of damage.'
            },
            DPS:true,
            HPS:'block',
            BM:true  
        },
        ACC:{
            title:"ACC",
            ex:{
                kr:'명중률 (%)',
                en:'The percentage of hits to swings.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        Swing:{
            title:"Swing",
            ex:{
                kr:'공격 횟수 (자동 공격, 도트, 기술 시전 취소 포함)',
                en:'The number of attack attempts.<br>This includes any auto-attacks or abilities, also including resisted abilities that do no damage.'
            },
            DPS:true,
            HPS:'block',
            BM:true 
        },
        Hit:{
            title:"Hit",
            ex:{
                kr:'공격 적중 횟수',
                en:'The number of attack attempts that produced damage.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        DHit:{
            title:"D.Hit",
            ex:{
                kr:'직격 횟수',
                en:'The number of hits that were direct hit.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        DHIT:{
            title:"D.HIT",
            ex:{
                kr:'직격 발동률 (%)',
                en:'The percentage of hits that were direct hits.'
            },
            DPS:false,
            HPS:'block',
            BM:true  
        },
        CHit:{
            title:"C.Hit",
            ex:{
                kr:'공격 극대화 횟수',
                en:'The number of damaging attacks that were critical.'
            },
            DPS:false,
            HPS:'block',
            BM:false  
        },
        CHIT:{
            title:"C.HIT",
            ex:{
                kr:'공격 극대화율 (%)',
                en:'The percentage of damaging attacks that were critical.'
            },
            DPS:true,
            HPS:'block',
            BM:true  
        },
        CDHit:{
            title:"C.D.Hit",
            ex:{
                kr:'직격 극대화 횟수',
                en:'The number of hits that were critical as well as direct hit.'
            },
            DPS:false,
            HPS:'block',
            BM:false 
        },
        CDHIT:{
            title:"C.D.HIT",
            ex:{
                kr:'직격 극대화율 (%)',
                en:'The percentage of hits that were direct hits as well as critical hits.'
            },
            DPS:false,
            HPS:'block',
            BM:true 
        },
        Miss:{
            title:"Miss",
            ex:{
                kr:'공격 빗나감 횟수',
                en:'The number of auto-attacks of CAs that produced a miss message.'
            },
            DPS:true,
            HPS:'block',
            BM:false 
        },        
        Avoid:{
            title:"Avoid",
            ex:{
                kr:'공격 실패 횟수 (적의 저항, 반사, 막기, 회피 등)',
                en:'Any type of failed attack that was not a miss.<br>This includes resists, reflects, blocks, dodging, etc.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },        
        MaxHit:{
            title:"MaxHit",
            ex:{
                kr:'최대 공격 기술',
                en:'The highest single damaging hit.'
            },
            DPS:true,
            HPS:'block',
            BM:true
        },       
        DTaken:{
            title:"D.Taken",
            ex:{
                kr:'받은 피해량',
                en:'The amount of damage this combatant received.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },       
        HTaken:{
            title:"H.Taken",
            ex:{
                kr:'받은 치유량',
                en:'The amount of healing this combatant received.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        PARRY:{
            title:"PARRY",
            ex:{
                kr:'받아넘기기 발동률 (%)',
                en:'The percentage of hits that were parried.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        BLOCK:{
            title:"BLOCK",
            ex:{
                kr:'방패막기 발동률 (%)',
                en:'The percentage of hits that were blocked.'
            },
            DPS:false,
            HPS:'block',
            BM:false
        },
        HPS:{
            title:"HPS",
            ex:{
                kr:'초당 치유량 (Time 기준, 공식)',
                en:'The healing total of the combatant divided by the duration of the encounter.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Hper:{
            title:"H%",
            ex:{
                kr:'전체 치유량 중 내가 기여한 치유량 (%)',
                en:'The value represents the percent share of all healing done by allies in this encounter.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Healed:{
            title:"Healed",
            ex:{
                kr:'치유량',
                en:'The amount of healing.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        EffHeal:{
            title:"Eff.Heal",
            ex:{
                kr:'유효 치유량',
                en:'The amount of healing except for Overheal and D.Shield value.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        DShield:{
            title:"D.Shield",
            ex:{
                kr:'보호막량',
                en:'The amount of damage blocked by shield abilities of healer.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        OverHeal:{
            title:"OverHeal",
            ex:{
                kr:'초과 치유량',
                en:'The amount of healing that made flood over 100% of health.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        OHEAL:{
            title:"O.HEAL",
            ex:{
                kr:'치유 초과율 (%)',
                en:'The percentage of heals above target\'s Max HP.'
            },
            DPS:'block',
            HPS:true,
            BM:false
        },
        Heal:{
            title:"Heal",
            ex:{
                kr:'치유 횟수 (도트, 기술 시전 취소 포함)',
                en:'The number of heals from this combatant.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        CHeal:{
            title:"C.Heal",
            ex:{
                kr:'치유 극대화 횟수',
                en:'The number of heals that were critical.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        CHEAL:{
            title:"C.HEAL",
            ex:{
                kr:'치유 극대화율 (%)',
                en:'The percentage of heals that were critical.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        MaxHeal:{
            title:"MaxHeal",
            ex:{
                kr:'최대 치유 기술',
                en:'The highest single healing amount.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        Dispel:{
            title:"Dispel",
            ex:{
                kr:'디버프 해제 기술 시전 횟수',
                en:'The number of times the combatant dispelled.'
            },
            DPS:'block',
            HPS:false,
            BM:false
        },
        Absorb:{
            title:"Absorb",
            ex:{
                kr:'기술 시전을 통한 HP 보충량 (최후의 일격 등)',
                en:'The amount of power this combatant drained from others.<br>(ex. Mercy Stroke etc)'
            },
            DPS:false,
            HPS:false,
            BM:false
        },
        Replenish:{
            title:"Replenish",
            ex:{
                kr:'기술 시전을 통한 MP 보충량 (에테르 흡수 등)',
                en:'The amount of power this combatant replenished to others.<br>(ex. Aetherflow etc)'
            },
            DPS:false,
            HPS:false,
            BM:false
        },
        Death:{
            title:"Death",
            ex:{
                kr:'죽음 횟수',
                en:'The number of times this character was killed by another.'
            },
            DPS:true,
            HPS:false,
            BM:true
        }   
    }
}
