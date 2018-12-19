export default class TriggerService
{
    static _triggers = {};

    static registerTrigger(key, callback, ...parameters)
    {
        if (callback == null) {
            console.log('[TriggerService]ERROR: cannot add null callback.');
            return;
        }

        if (TriggerService._triggers[key] != null) {
            let ln = TriggerService._triggers[key].length;
            TriggerService._triggers[key][ln] = {cb: callback, params: parameters};
        }
        else {
            TriggerService._triggers[key] = [{cb: callback, params: parameters}];
        }
    }

    static unregisterTrigger(key, callback = null)
    {
        if (TriggerService._triggers[key] == null) {
            return;
        }
        if (callback == null) {
            delete TriggerService._triggers[key];
        }
        else {
            TriggerService._triggers[key].some((trigger, index) => {
                if (trigger.cb === callback) {
                    TriggerService._triggers[key].splice(index, 1);
                    return true;
                }

                return false;
            });
        }
    }

    static trigger(key, ...parameters)
    {
        if (TriggerService._triggers[key] == null) {
            return;
        }

        TriggerService._triggers[key].forEach((trigger) => {
            trigger.cb.apply(null, parameters.length === 0 ? trigger.params : parameters)
        })
    }
}
