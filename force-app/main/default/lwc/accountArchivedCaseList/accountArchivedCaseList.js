import { LightningElement, api } from 'lwc';
import getArchivedCases from '@salesforce/apex/AccountArchivedCasesController.getArchivedCases';

const COLUMNS = [
    { label: 'Case Number', fieldName: 'Case_Number__c' },
    { label: 'Subject', fieldName: 'Subject__c' },
    { label: 'Type', fieldName: 'Type__c' },
    { label: 'Date/Time Opened', fieldName: 'Date_Time_Opened__c', type: 'date', typeAttributes: {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
        }
    },
    { label: 'Date/Time Closed', fieldName: 'Date_Time_Closed__c', type: 'date', typeAttributes: {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
        }
    }
]; 

export default class AccountArchivedCaseList extends LightningElement {
    @api recordId;
    archivedCases;
    error; 

    columns = COLUMNS;

    async handleClick() {
        console.log('Clicked');
        try {
            this.archivedCases = await getArchivedCases({ accountId: this.recordId });
            this.error = undefined;
            console.log(this.archivedCases);
        } catch (error) {
            this.archivedCases = undefined;
            this.error = error;
        }
    }
}