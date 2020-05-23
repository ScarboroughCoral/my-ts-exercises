// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.

    interface DateDetails {
        hours: number,
        minutes: number,
        second: number
    }
    function pad(s: number): string;
}
