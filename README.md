# IonSelectBug
Repro of IonSelect bug in Ionic 6 beta 
1. Create a new blank Ionic React app - ionic start IonSelectBug blank. Select React
2. Upgrade to beta - npm i @ionic/react@next @ionic/react-router@next
2. Add IonContent and an IonSelect
3. Run it in DEV and then run 'npm run build' to create a production build
