import * as constants from '../_constants';

export function scroll(Target:number){

    let currentPosition: number = window.pageYOffset;
    let stepper = 40;
    let steps = 0;
    let thisStep: number;
    let thisTimer: any;

    if (window.innerWidth < constants.screenSize.getStringFromScreenSize(constants.screenSize.md)){
        Target = Target - 250;
    }else{
        Target = Target-50;
    }

    if (currentPosition < Target) {
        thisTimer = setInterval(
            function () {
                steps += 1;
                thisStep = (steps * stepper) + currentPosition;
                window.scrollTo(0, thisStep);
                if (thisStep > Target) {
                    clearInterval(thisTimer);
                    return;
                }

            }, 1
        )
    } else {
        thisTimer = setInterval(
            function () {
                steps += 1;
                thisStep = currentPosition - (steps * stepper);
                window.scrollTo(0, thisStep);
                if (thisStep < Target) {
                    clearInterval(thisTimer);
                    return;
                }

            }, 1
        )
    }

}