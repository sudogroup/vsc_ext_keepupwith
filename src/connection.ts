
export class Connection {

    // TODO, complete the method
     static async updateStatus(workspaceName : string, key : String, status = 1) {
        console.log(status + "_----------_");
        const url = "";
        const bodyData = "";
        
        return await fetch(url, {
            method: 'POST',
            body: bodyData,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });
    }

}
