
export function getResultOsgpo(bp = 180 ,
            par = { 
                k1 : '0',  // тип ТС
                k2 : '0',  // город регистрации
                k3 : '1',  // такси\нетакси
                k4 : '1',  // физ\юр const физ
                k5 : '1',  // период использования const год
                k6 : '1',  // ко убыточности  (вычисляется)
                k7 : '1',  // срок действия   const год
                k8 : '1',  // электрон\не электрон const єлектрон
                k9 :  '1', // дтп были\не были  (игнор)
                k10 : '1', // есть\нет льготы 
                k11 : '1', // убыточн партнеров (игнор)  
                k12 : '1', // франшиза
                k13 : '1', // сфера использования (игнор) 
                }
            ){

        let valueK1 = 0
        let valueK2 = 0
        let valueK3 = 1
        let valueK4 = 1.6  // считаем, что страхуем только физлиц
        let valueK5 = 1
        let valueK7 = 1
        let valueK8 = 1
        let valueK9 = 1
        let valueK10 = 1
        let valueK11 = 1
        let valueK12 = 1
        let valueK13 = 1

        // коефициенты убыточности 
        let valueK61 = 0
        let valueK62 = 0
        let valueK63 = 1
        let valueK64 = 1 // считаем, что страхуем только физлиц
        let valueK65 = 1
        let valueK66 = 1
        let valueK67 = 1
        let valueK68 = 1
        let valueK69 = 1
        let valueK610 = 1
        let valueK611 = 1
        let valueK612 = 1
        let valueK613 = 1

        // тип
        switch(par.k1){
            case 'A1': valueK1 = 0.34;  valueK61 = 1; par.k3 = 1;   break;  
            case 'A2': valueK1 = 0.68;  valueK61 = 1; par.k3 = 1;   break;
            case 'B1': valueK1 = 1;     valueK61 = 1;    break;
            case 'B2': valueK1 = 1.14;  valueK61 = 1;    break;
            case 'B3': valueK1 = 1.18;  valueK61 = 1;    break;
            case 'B4': valueK1 = 1.82;  valueK61 = 1;    break;
            case 'B5': valueK1 = 0.9;   valueK61 = 1.11; break;
            case 'F':  valueK1 = 0.34;  valueK61 = 1;    break;
            case 'D1': valueK1 = 2.55;  valueK61 = 1.5;  break;
            case 'D2': valueK1 = 3;     valueK61 = 1.5;  par.k3 = 1; break;
            case 'C1': valueK1 = 2;     valueK61 = 1.15; par.k3 = 1; break;
            case 'C2': valueK1 = 2.18;  valueK61 = 1.15; par.k3 = 1; break;
            case 'E':  valueK1 = 0.5;   valueK61 = 1;    par.k3 = 1; break;
            default: valueK1 = valueK61 = 0;
        }

        // город\зона
        switch(par.k2){
            case '1': valueK2 = 4.8;  valueK62 = 1.05; break;
            case '2': valueK2 = 3.5;  valueK62 = 1.05; break;
            case '3': valueK2 = 2.8;  valueK62 = 1.03; break;
            case '4': valueK2 = 2.5;  valueK62 = 1; break;
            case '5': valueK2 = 1.5;  valueK62 = 1; break;
            case '6': valueK2 = 5;    valueK62 = 1; break;
            default:  valueK2 = valueK62 = 0;
        }

        // такси\нетакси
        switch(par.k3){
            case '1': valueK3 = 1;   valueK63 = 1;   break;    
            case '3': valueK3 = 1.4; valueK63 = 1.2; break;
            default:  valueK3 = 1;   valueK63 = 1;   break;
        }

        // льготы    
        switch(par.k10){
            case '0': valueK10 = 1;   valueK610 = 1; break;
            case '1':
            case '2':
            case '3':
            case '4':         
                valueK10 = 0.5; valueK610 = 1; break;
            default:  valueK10 = 1;   valueK610 = 1; break;
        }

        /* ko франшизы */ 
        switch(par.k12){
            case '2600': valueK12=1; valueK612 = 1; break;
            case '1300': valueK12=1; valueK612 = 1.07; break;
            case '0':    valueK12=1; valueK612 = 1.14; break;
            default: 
                valueK12=1; valueK612 = 1; break;
        }

        let mulK6 = 
                valueK61*
                valueK62*
                valueK63*
                valueK64*
                valueK65*
                valueK66*
                valueK67*
                valueK68*
                valueK69*
                valueK610*
                valueK611*
                valueK612*
                valueK613
        const valueK6 = +mulK6.toFixed(2)

        const result = bp*
                valueK1*
                valueK2*
                valueK3*
                valueK4*
                valueK5*
                valueK6*
                valueK7*
                valueK8*
                valueK9*
                valueK10*
                valueK11*
                valueK12*
                valueK13;

    
                                                    
        const calcValues = {
            calcValues:{k1:valueK1,k2:valueK2,k3:valueK3,k4:valueK4,k5:valueK5,k6:valueK6,k7:valueK7,k8:valueK8,k9:valueK9,
                    k10:valueK10, k11:valueK11, k12:valueK12, k13:valueK13}
        }
      
        calcValues.resultPl = Math.round(result) 
        return calcValues
    }

    export function getResultDgo(pardgo={k2:'0',ss: '0'}){
        return 0;
    }

    export function getResultDgoPlus(pardgo={k2:'0',ss: '0'}){
        return 0;
    }