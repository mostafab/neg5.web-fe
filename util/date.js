export default {
    momentToDate(momentDate) {
        if (!momentDate) {
            return null;
        }
        return momentDate.toISOString().split('T')[0];
    }
}