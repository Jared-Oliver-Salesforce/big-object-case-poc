public with sharing class AccountArchivedCasesController {
    @AuraEnabled(cacheable=true)
    public static List<Archived_Case__b> getArchivedCases(Id accountId) {
        List<Archived_Case__b> archivedCases = new List<Archived_Case__b>();
        try {
            archivedCases = [SELECT Case_Number__c, Subject__c, Type__c, Date_Time_Closed__c, Date_Time_Opened__c 
                FROM Archived_Case__b 
                WHERE Account_Id__c = :accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return archivedCases;
    }
}