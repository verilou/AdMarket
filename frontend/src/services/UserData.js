export default class UserData
{
    static worksites = null
    static currentWorksite = null
    static worksiteReport = null
    static updatedObservations = null
    static user = null
    static locale = 'fr-FR'

    static updateWorksites(new_worksites)
    {
        if (new_worksites == null) {
            this.worksites = new Map()
            return
        }

        if (this.worksites != null) {
            // Ignore worksites that are already done
            new_worksites.forEach((worksite) => {
                if (this.worksites[worksite.id] != null && this.worksites[worksite.id].done) {
                    delete new_worksites[w_id]
                } else {
                    this.worksites.set(worksite.id, worksite)
                }
            })
        } else {
            this.worksites = new Map()
            new_worksites.forEach((worksite) => {
                this.worksites.set(worksite.id, worksite)
            })
        }
    }

    static checkNextWorksite()
    {
        for(let worksite of this.worksites.values())
        {
            if (!worksite.done) { // TODO : add "done":true to worksites when they are completed
                this.currentWorksite = worksite
                break
            }
        }
    }
}