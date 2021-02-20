import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";




 


    
    


 
  

const ProfilScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#f0f8ff' barStyle="dark-content"/>
        
        <ScrollView>
          
          <Text style={styles.sectionContent}>
          Conditions générales d’utilisation
De Boncoins
ACCORD ENTRE L'UTILISATEUR ET BONCOINS SERVICES.
1. Dispositions générales
Bienvenue sur l’application Boncoins, fourni par Boncoins Services. Les termes "nous", "notre" ‘nos’, “Boncoins” et "Boncoins Services’’ désignent Boncoins Services. qui est une Agence de Marketing et publicité  enregistrée sous le numéro TG-LFW-01-2020-A10-15800 au Registre du commerce de la Chambre de commerce et des sociétés du Togo  dont le siège est situé à Lomé bd de l’OTI quartier bé-kpota. 
L'accès à notre à application mobile ou tablette de Boncoins Services, ou à toute autre fonctionnalité ou autre plateforme de Boncoins Services (collectivement, la "l’application") vous est offert sous réserve de votre acceptation sans modification de tous les termes, conditions et avis énoncés ci-dessous (collectivement, les "Conditions"). Nous vous recommandons d'imprimer une copie de ces Conditions comme référence future. Veuillez lire attentivement ces conditions, car elles contiennent des informations importantes sur les limitations de responsabilité. Nous vous recommandons également de lire notre Politique de Confidentialité, qui règlemente l'utilisation de notre application et qui précise les conditions selon lesquelles nous pouvons traiter les renseignements personnels que nous recueillons à votre sujet ou que vous nous fournissez, et qui est intégrée par renvoi dans les présentes Conditions. La Politique de Confidentialité peut être consultée ici. En accédant ou en utilisant notre application, vous reconnaissez et acceptez d’avoir lu, compris et convenu d'être légalement lié par ces Conditions et par notre Politique de Confidentialité. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ou accéder à notre application ou contacter notre centre de support ici. 
2. Modifications des Conditions
Nous pouvons modifier ces Conditions à tout moment afin de nous conformer aux exigences réglementaires ou en cas de modification de nos pratiques commerciales. Nous nous efforcerons, dans la mesure du possible, de vous informer de tout changement important apporté à ces Conditions. Toutefois, chaque fois que vous souhaitez utiliser notre Application, veuillez consulter ces Conditions pour vous assurer que vous comprenez bien celles qui s'appliquent à ce moment-là. Votre utilisation de notre Plateforme sera régie par la version la plus récente des Conditions disponibles sur l’application. Nous vous recommandons de lire régulièrement les Conditions disponibles sur l’application afin d'être sûr d'être informé de tout changement qui pourrait vous concerner. 
3. Accès et Utilisation de la Plateforme
L’application est actuellement mise gratuitement à votre disposition pour votre usage personnel et non commercial(ceci est réservé à boncoins services). 
Nous ne garantissons pas que l'accès à l’application, ou à tout contenu sur celle-ci, sera toujours disponible ou ininterrompu. Nous pouvons suspendre, retirer, interrompre ou modifier tout ou partie de l’application sans préavis. 
Vous ne devez pas abuser de l’application en y introduisant sciemment des virus, des chevaux de Troie, des vers, des bombes logiques ou tout autre élément malveillant ou technologiquement dangereux. Vous ne devez pas tenter d'obtenir un accès non autorisé à l’application, au serveur sur lequel l’application est stockée ou à tout serveur, ordinateur ou base de données connecté à l’application. Vous ne devez pas attaquer la Plateforme via une attaque par déni de service ou une attaque par déni de service distribué. Nous signalerons tout manquement de cette nature aux autorités policières compétentes et nous coopérerons avec ces autorités en leur divulguant votre identité. Dans le cas d'une telle violation, votre droit d'utilisation de l’application  cessera immédiatement. 
4. Nous ne vendons pas de Produits Hôteliers, de restaurations et autres catégories existants sur l’application
L’application est un moteur de recherche  qui fournit aux utilisateurs des comparaisons pour différentes offres de d'hôtel, restauration, lieux de loisir et de divertissement. Boncoins ne fournit, ne possède ni ne contrôle aucun des services et produits  auxquels vous pouvez accéder via notre application. Les Produits  appartiennent, sont contrôlés ou mis à disposition par des tiers. Les Prestataires  sont responsables des Produits  et de tous les contrats de réservation, y compris, par exemple, les réservations Boncoins expresse.  Les conditions et les politiques de confidentialité du Prestataire  s'appliquent à votre réservation, vous devez donc accepter et comprendre ces conditions. De plus,Votre interaction avec tout Prestataire avec lequel vous entrez en contact par l'intermédiaire de notre application est à vos propres risques, et Boncoins n'assume aucune responsabilité en cas de problème lors de votre réservation. Boncoins n'a aucun contrôle sur les Produits  ou les Prestataires. Pour plus d'informations sur le fonctionnement de Boncoins, y compris sur les modalités de référencement, de déréférencement et de classement des offres en ligne, nous vous recommandons de nous contactés au Services.Boncoins@gmail.com. 
Boncoins héberge le contenu, y compris les prix, les images et autres informations mis à disposition ou obtenus auprès des Prestataires, ainsi que le contenu fourni par les utilisateurs, tels que les commentaires, évaluations et autres informations ("Contenu d'Utilisateur" et avec le Contenu du Prestataire, ensemble le "Contenu"). Boncoins n'est en aucun cas responsable de l'exactitude, de la qualité, de l'exhaustivité, de la fiabilité, de l'actualité ou de l’honnêteté du Contenu, et Boncoins n'a aucune influence sur le Contenu. En particulier, nous ne garantissons pas que le Contenu du Prestataire, en particulier les prix qui y sont reflétés, sera mis à jour en temps réel ou qu'un Produit  particulier sera disponible, puisque nous ne reflétons que les offres du Produit  telles que fournies par le site Web du Prestataire. Les notations  affichées sur cette application  sont destinées à n’être que des lignes directrices générales et nous ne garantissons pas l'exactitude de ces notations ou de tout autre Contenu d'Utilisateur, dès lors que nous ne les vérifions pas. 
5. Service Boncoins
Le service "Boncoins" facilite l’orientation vers les coins à visiter et la réservation d'un Produit  auprès d'un Prestataire Hôtelier, restaurateur etc via notre application. Si vous choisissez d'utiliser le service Boncoins (lorsqu’il est disponible), la réservation sera effectuée auprès du Prestataire dont le nom figure sur la page de réservation, et boncoins transmettra les informations de réservation que vous aurez fournies au Prestataire concerné. Lorsque vous effectuez une réservation par le biais de Boncoin, notre application agit uniquement comme une interface utilisateur, et vous n'aurez une réservation valide auprès d'un Prestataire  que si vous recevez dans les 3heures suivant une confirmation écrite du Prestataire Hôtelier acceptant la réservation. Le contrat pour la réservation en question sera conclu entre vous et le Prestataire. Boncoins n'est pas responsable de la réservation ou du Produit  car boncoin n'est pas impliqué dans la création de la description du Produit, dans la définition du prix et des frais éventuels et dans la fourniture des Produits  que vous avez réservés. Si vous avez des questions ou conflits concernant votre réservation et/ou le Produit , vous acceptez de les adresser au Prestataire  et de les résoudre avec lui et non avec nous. 
6. Utilisation de l’application
Comme condition d'utilisation de notre Plateforme, vous déclarer : 
•  avoir au moins 18 ans ; 
•  être légalement en capacité de créer des obligations juridiques contraignantes ; 
•  que vous utiliserez l’application conformément aux présentes Conditions ; 
•  que vous n'utiliserez cette application que pour votre usage privé afin de rechercher des offres  légitimes ; 
•  si vous utilisez la Plateforme pour le compte d'une autre personne, que vous l'informerez des Conditions qui s'appliquent à toutes les recherches et/ou réservations que vous avez effectuées en son nom, y compris toutes les règles et restrictions qui s'y rapportent ; 
•  que toutes les informations que vous fournissez à notre plateforme sont véridiques, exactes, à jour et complètes ; 
•  si vous possédez un compte Boncoins, que vous protégerez les informations de votre compte, superviserez et serez entièrement responsable de toute utilisation de votre compte par vous et toute personne autre que vous. 
Nous nous réservons le droit, à notre seule discrétion, de refuser l'accès à quiconque à notre Plateforme et aux services que nous offrons en cas de violation des présentes Conditions. 
Les Produits  présentés sur l’application sont affichés dans la devise que vous avez sélectionnée. Si vous ne sélectionnez aucune devise, la devise pertinente pour le domaine de premier niveau correspondant sera utilisée par défaut. Notre conversion de devises est à titre d'information et n'est pas mise à jour en temps réel. Par conséquent, cette conversion ne doit pas être considérée comme précise et en temps réel. Certains Produits  peuvent également être vendus dans une autre devise que celle que vous avez prédéfinie ou choisie pour l'affichage des résultats de la recherche. Les taux réels peuvent varier et votre fournisseur de services de paiement peut facturer des frais de conversion et appliquer le taux de change valable à une date différente. 
Tous les prix affichés  s'entendent toutes taxes comprises. Pour les périodes de réservation de  le prix affiché est le prix moyen  pour la période sélectionnée. 
Les prix indiqués incluent les frais de réservation, la TVA et les frais de service, mais n'incluent pas les frais d'hôtel, les taxes de séjours ou les taxes municipales. 
7. Membres de Boncoins
Vous avez la possibilité de rejoindre la communauté Boncoins en créant un compte de membre dans l'espace Profil. Les membres peuvent  participer activement au développement de l’application via les fonctions administratives. Les utilisateurs non enregistrés peuvent lire le contenu de Boncoins gratuitement. 
 Afin de créer un compte, vous devrez fournir certains renseignements personnels. Après la suppression de votre compte, nous ne conserverons vos informations personnelles qu'aussi longtemps que nécessaire ou aussi longtemps que la loi nous y oblige. En dehors de votre nom d'utilisateur, aucune information personnelle n'est rendue visible. Pour de plus amples informations, veuillez consulter notre Politique de Confidentialité. 
Boncoins n'autorise qu'un seul enregistrement de compte par personne. Vous êtes responsable de l'exactitude et de l'exhaustivité de vos informations personnelles. 
Vous êtes responsable de l'utilisation de votre compte et de la confidentialité des informations de votre compte utilisateur, en particulier de votre mot de passe. Vous ne devez pas les divulguer à des tiers. Nous avons le droit de désactiver votre compte ou votre mot de passe, à tout moment, si, selon notre opinion, vous n'avez pas respecté les présentes conditions d'utilisation. Si vous savez ou soupçonnez que quelqu'un d'autre que vous connaît votre code d'identification d'utilisateur ou votre mot de passe, vous devez en informer immédiatement Boncoins. 
8. Obligations de l'Utilisateur et Activités Interdites
En tant qu'utilisateur de l’application, vous êtes responsable de tout Contenu Utilisateur (texte, commentaires, liens, etc.) que vous publiez sur Boncoins. Vous devez vous assurer que vous disposez de tous les droits sur tout contenu que vous publiez sur les Plateformes Boncoins et qu'aucun Contenu Utilisateur ne viole les droits des tiers. 
En particulier, vous ne devez pas créer et publier de Contenu Utilisateur qui : 
•  est de la publicité déguisée en commentaire ; 
•  n'a pas de contenu spécifique pour un élément commenté ; 
•  n’est pas objectif ou intentionnellement inexact ; 
•  est immoral, pornographique ou offensant de toute autre manière ; 
•  viole les droits de tiers, en particulier les droits d'auteur ; 
•  enfreint les lois applicables de quelque façon que ce soit ou constitue une infraction pénale ; 
•  contient des virus ou d'autres programmes informatiques qui peuvent endommager les logiciels ou le matériel ou qui peuvent affecter l'utilisation des ordinateurs ; 
•  est une sondage ou une chaîne d'emails ; ou 
•  a pour but de collecter ou d'utiliser les données personnelles d'autres utilisateurs, en particulier à des fins commerciales. 
En outre, vous acceptez de ne pas : 
•  utiliser notre application ou son contenu à des fins commerciales ; 
•  faire de réservation spéculative, fausse, ou frauduleuse ou de réservation par anticipation de la demande ; 
•  accéder, contrôler ou copier tout contenu ou toute information de notre Plateforme à l'aide d'un robot, "spider", "scraper" ou de tout autre moyen automatisé ou d'un processus manuel à quelque fin que ce soit sans notre autorisation écrite expresse ; 
•  violer les restrictions des fichiers d'exclusion de robots sur notre Plateforme ou contourner ou éviter d'autres mesures employées pour empêcher ou limiter l'accès à notre Plateforme ; 
•  prendre toute mesure qui impose ou pourrait imposer, à notre discrétion, une charge déraisonnable ou disproportionnée à notre infrastructure ; 
•  créer de liens hypertexte vers toute partie de notre Plateforme (y compris, sans s'y limiter, le chemin d’accès à tout service) à quelque fin que ce soit sans notre autorisation écrite expresse que nous pouvons retirer à tout moment à notre discrétion ; ou 
•  copier, reproduire ou incorporer toute partie de notre Plateforme dans tout autre site internet sans notre autorisation écrite préalable que nous pouvons retirer à tout moment à notre discrétion. 
Si votre activité sur notre Application montre des signes de fraude, d'abus ou d'activité suspecte, Boncoins peut vous refuser ses services et fermer tout compte boncoin associé. Si vous avez mené une activité frauduleuse, Boncoins se réserve le droit de prendre toutes les mesures nécessaires d’un point de vue légal et vous pourrez être responsable des pertes financières subies par Boncoins, y compris les frais de procédure et les dommages et intérêts. Pour contester l'annulation d'une réservation ou le blocage ou la fermeture d'un compte, veuillez contacter le service clientèle de Boncoins. 
9. Liens de et vers la Plateforme
Notre Application peut contenir des liens hypertextes vers des sites internet exploités par des tiers autres que Boncoins. De tels liens hypertextes ne sont fournis qu'à titre de référence. Nous ne contrôlons pas ces sites internet et ne sommes pas responsables de leur contenu ou de la confidentialité ou d'autres pratiques de ces sites internet. Ces Conditions ne s'appliqueront pas à votre utilisation d'un site internet tiers auquel vous accédez via notre Application. Votre utilisation d'un site internet tiers peut être soumise à des conditions d’utilisation supplémentaires, que nous vous suggérons de lire attentivement avant de visiter un tel site internet. 
En outre, il vous incombe de prendre les précautions nécessaires pour vous assurer que les liens que vous sélectionnez  (que ce soit à partir de notre application ou autre plateforme Boncoins service ou d'autres sites internet) sont exempts d'éléments tels que des virus, vers informatiques, chevaux de Troie, défauts et autres éléments à caractère destructif. L'inclusion de liens hypertextes vers ces sites internet n'implique aucunement que nous approuvons le contenu de ces sites internet ou que nous nous associons à leurs exploitants. 
10. Droits de Propriété Intellectuelle
Nous sommes propriétaires ou titulaires de tous les droits de propriété intellectuelle sur notre application et le Contenu (y compris, mais sans s'y limiter, le prix et la disponibilité des services) ainsi que l'infrastructure utilisée pour fournir ce Contenu. Bien que vous puissiez faire des copies limitées de votre itinéraire (et des documents associés) pour les réservations  effectuées par le biais de notre application, vous acceptez de ne pas modifier, copier, distribuer, transmettre, afficher, exécuter, reproduire, publier, concéder sous licence, créer des œuvres dérivées, transférer, vendre ou revendre toute information, logiciel, produit ou service obtenu sur ou via cette application. 
Si vous copiez ou utilisez une partie de l’application en violation des Conditions, votre droit d'utiliser l’application cessera immédiatement et vous devrez détruire toute copie des documents que vous avez réalisée. 
Vous acceptez de ne pas générer d'impressions de pages ou de contenus automatisés sur l’application. 
11. Confidentialité et Cookies
Boncoins croit en la protection de votre vie privée. Tous les renseignements personnels que nous recueillons à votre sujet lorsque vous naviguez et utilisez notre Plateforme seront utilisés conformément à notre Politique de Confidentialité. Pour en savoir plus sur les données que nous recueillons à votre sujet et sur la façon dont nous les utilisons, veuillez consulter notre Politique de Confidentialité actuelle, qui régit également votre utilisation de l’application et, comme indiqué ci-dessus. 
12. Disponibilité
Nous ne garantissons pas que notre application sera toujours disponible, ininterrompue, sécurisée ou exempte de bugs ou de virus. 
Nous déclinons toute responsabilité en cas de retard ou d'inexécution résultant d'un cas de force majeure tel que défini à l'article 1218 du Code civil, y compris, sans s'y limiter, guerre, terrorisme, émeutes, embargos, actes des autorités civiles ou militaires, incendies, inondations, accidents, grèves, épidémies ou autres catastrophes naturelles, défaillances des moyens de transport, de carburant, d'énergie, d'ouvriers ou de matériaux, ou pannes des réseaux publics ou privés de télécommunications. 
13. Notre responsabilité est limitée
Boncoins ne donne aucune garantie quant à l'adéquation du Contenu affiché sur notre application à quelque fin que ce soit. L'affichage sur notre Application d'un Produit  ou de tout Contenu n'implique, ne suggère ni ne constitue en aucun cas un parrainage ou une approbation dudit Produit Hôtelier ou dudit Contenu par ledit Prestataire, ou une affiliation entre ledit Prestataire et Boncoins. Tout le Contenu et toute autre information fournie sur notre application sont fournis "en l'état" sans garantie d'aucune sorte. 
Les Prestataires sont indépendants de Boncoins et ne sont pas des agents ou employés de boncoins services. Boncoins n'est pas responsable des actes, erreurs, omissions, déclarations, garanties, violations ou négligence de tout Prestataire, y compris pour les blessures, décès, dommages matériels, ou tout autre dommage ou dépense en résultant.Boncoins ne sera pas responsable de toute annulation, surréservation, grève, cas de force majeure ou autres causes qualifiées de cas de force majeure ou ne résultant pas d'un manquement à ses obligations légales ou contractuelles. Boncoins n'est pas responsable de l'accessibilité interrompue à notre Plateforme et peut effectuer des travaux techniques ou de maintenance sur l’application au moment de son choix. 
Boncoins n’est pas responsable (i) des dommages indirects, (ii) des dommages résultant d'un cas de force majeure au sens de l'article 1218 du Code civil, (iii) des dommages qui n'auraient pas été causés par la violation de ses obligations découlant des présentes Conditions ou de ses obligations légales. Rien dans les présentes Conditions n'exclut ou ne limite notre responsabilité pour (a) un décès ou des dommages corporels causés par notre négligence, (b) une fraude ou une fausse déclaration frauduleuse, (c) ou toute autre responsabilité qui ne peut être exclue ou limitée par la loi. 
14. Règlement des litiges
Boncoins, s'engage à satisfaire ses clients, de sorte que si vous avez un problème ou un différend, nous tenterons d'apporter une réponse à vos préoccupations. Toutefois, si nous n'y parvenons pas, vous pourrez présenter une réclamation, comme expliqué dans cette section. 
Vous pouvez nous donner l'opportunité de résoudre tout différend ou toute réclamation concernant de quelque manière que ce soit l’application, toute relation avec nos agents du service client, tout service ou produit fourni, toute déclaration faite par nous, ou notre Politique de Confidentialité ("Réclamations") en contactant le centre de support clientèle Boncoins. Si nous ne sommes pas en mesure de résoudre vos Réclamations vous pouvez demander réparation devant les tribunaux. 
Pour les professionnels (y compris les utilisateurs finaux commerciaux) et dans la mesure permise par la loi, ces termes et conditions et la fourniture de nos services seront régis et interprétés conformément au droit Togolais, et tout litige découlant de ces termes et conditions générales et nos services seront soumis exclusivement aux tribunaux compétents de Lomé, au Togo. 
Pour les consommateurs, les présentes Conditions et la fourniture de nos services sont régies et interprétées conformément au droit Togolais. Toutefois, en tant que consommateur, vous bénéficierez de toutes les dispositions impératives de la loi du pays dans lequel vous résidez. Rien dans les présentes Conditions n'affecte votre droit en tant que consommateur de vous prévaloir des dispositions impératives de la loi locale et de vos droits légaux. Vous et nous convenons qu’une compétence non-exclusive est attribuée aux tribunaux de Lomé, au Togo. Toutefois, si vous êtes un consommateur et un résident d'un autre pays, vous et nous pouvons également intenter une action dans ce pays. 
15. Réclamations et questions
Si vous avez des questions ou des réclamations concernant l’application, veuillez contacter notre centre de support. Nous ferons notre possible pour vous répondre rapidement. 
16. Général
Notre exécution des présentes Conditions est soumise aux lois et procédures légales en vigueur, et rien dans les présentes Conditions ne limite notre droit de nous conformer à la loi ou aux demandes ou exigences gouvernementales ou légales relatives à votre utilisation de notre Plateforme ou aux informations qui nous ont été fournies ou que nous avons recueillies en rapport avec cette utilisation. 
Ces Conditions ne créent ou n’impliquent aucun droit à l'égard de toute personne qui n'y est pas partie. 
Nous pouvons transférer nos droits et obligations en vertu des présentes Conditions à une autre organisation, mais cela n'affectera pas vos droits ou nos obligations en vertu des présentes Conditions. Vous ne pouvez transférer vos droits ou obligations en vertu des présentes Conditions à une autre personne que si nous y consentons par écrit. 
Si une partie quelconque de ces Conditions est reconnue comme étant non-valable, illégale ou inapplicable, la validité, la légalité et le caractère exécutoire des autres dispositions ne seront en aucun cas affectés ou compromis. Notre manquement ou retard dans l'application de toute disposition des présentes Conditions à tout moment ne constitue pas une renonciation à notre droit d'appliquer la même disposition ou toute autre disposition des présentes à l'avenir. 
Les noms fictifs d'entreprises, de produits, de personnes, de personnages et/ou de données mentionnés sur l’application ne sont pas destinés à représenter un individu, une entreprise, un produit ou un événement réel. 
Tous les droits qui ne sont pas expressément accordés dans les présentes Conditions sont réservés
  
          </Text>
        </ScrollView>
        
            
         

</View>
  );
};

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f0f8ff',

},
sectionContent: {
  fontSize: 16,
  textAlign: 'justify',
  margin:20,
  marginTop:70, 
  
},
    
 
});

export default ProfilScreen;
