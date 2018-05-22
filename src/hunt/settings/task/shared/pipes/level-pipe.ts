import { Pipe } from '@angular/core';

import { Level, levelLabels } from './constants';

@Pipe({name: 'level'})
export class LevelPipe {
    transform(value: Level, arg: string) {
        if (arg === 'text') {
            return levelLabels.getText(value);
        } else if (arg === 'class') {
            return levelLabels.getClass(value);
        }
    }
}
