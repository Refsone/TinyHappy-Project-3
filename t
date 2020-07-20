usage : git tag [-a | -s | -u <id-clé>] [-f] [-m <message> | -F <file>] <nom-étiquette> [<head>]
   ou : git tag -d <nométiquette>...
   ou : git tag -l [-n[<num>]] [--contains <commit>] [--no-contains <commit>] [--points-at <objet>]
		[--format=<format>] [--[no-]merged [<commit>]] [<motif>...]
   ou : git tag -v [--format=<format>] <nométiquette>...

    -l, --list            afficher les noms des étiquettes
    -n[<n>]               affiche <n> lignes de chaque message d'étiquette
    -d, --delete          supprimer des étiquettes
    -v, --verify          vérifier des étiquettes

Options de création de l'étiquette
    -a, --annotate        étiquette annotée, nécessite un message
    -m, --message <message>
                          message pour l'étiquette
    -F, --file <fichier>  lire le message depuis un fichier
    -e, --edit            forcer l'édition du message d'étiquetage
    -s, --sign            étiquette annotée et signée avec GPG
    --cleanup <mode>      comment éliminer les espaces et les commentaires # du message
    -u, --local-user <id-clé>
                          utiliser une autre clé pour signer l'étiquette
    -f, --force           remplacer l'étiquette si elle existe
    --create-reflog       créer un reflog

Options d'affichage des étiquettes
    --column[=<style>]    afficher la liste des étiquettes sous forme de colonnes
    --contains <commit>   afficher seulement les étiquettes qui contiennent la validation
    --no-contains <commit>
                          afficher seulement les étiquettes qui ne contiennent pas la validation
    --merged <commit>     afficher seulement les étiquettes qui sont fusionnées
    --no-merged <commit>  afficher seulement les étiquettes qui ne sont pas fusionnées
    --sort <clé>          nom du champ servant à trier
    --points-at <objet>   afficher seulement les étiquettes de l'objet
    --format <format>     format à utiliser pour la sortie
    --color[=<quand>]     respecter les couleurs de formatage
    -i, --ignore-case     le tri et le filtrage sont non-sensibles à la casse

