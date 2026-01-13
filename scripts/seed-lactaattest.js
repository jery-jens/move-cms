/**
 * Seed script for Lactaattest Page
 *
 * Run this script after deploying to populate initial content:
 * node scripts/seed-lactaattest.js
 *
 * Required environment variables:
 * - STRAPI_URL: Your Strapi URL (e.g., https://your-cms.onrender.com)
 * - STRAPI_API_TOKEN: API token with write access (create in Settings > API Tokens)
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_TOKEN) {
    console.error('Error: STRAPI_API_TOKEN environment variable is required');
    console.log('Create an API token in Strapi: Settings > API Tokens > Create new API Token');
    console.log('Give it "Full access" permissions');
    process.exit(1);
}

const lactaattestData = {
    data: {
        HeroTitle: "Maximaliseer je duurprestaties",
        HeroSubtitle: "Wetenschappelijke lactaattesten en persoonlijke begeleiding voor optimale trainingszones en progressie",
        PrimaryButtonLabel: "Onze Formules",
        PrimaryButtonUrl: "#formules",
        SecondaryButtonLabel: "Over de Test",
        SecondaryButtonUrl: "#info",
        InfoTitle: "Praktische informatie",
        InfoSubtitle: "Wat moet je weten voor je test?",
        PricingTitle: "Onze formules",
        PricingSubtitle: "Kies de begeleiding die past bij jouw ambitie en niveau",
        PricingPlans: [
            {
                Name: "Critical Power Test",
                Description: "Inclusief 3 maanden trainingsschema",
                Price: "70",
                Unit: "pakket",
                Featured: false,
                Features: [
                    { Text: "Nauwkeuriger dan klassieke FTP-test", IconType: "star" },
                    { Text: "Analyse van aerobe/anaerobe systemen", IconType: "chart" },
                    { Text: "3 maanden trainingsschema", IconType: "calendar" },
                    { Text: "Optimalisatie van intervaltrainingen", IconType: "target" }
                ]
            },
            {
                Name: "Lactaattest - Instap",
                Description: "Ideaal voor een eerste meting en basisadvies",
                Price: "110",
                Unit: "test",
                Featured: false,
                Features: [
                    { Text: "Eén nauwkeurige lactaattest", IconType: "check" },
                    { Text: "Bepaling van drempels & trainingszones", IconType: "check" },
                    { Text: "Advies voor optimalisatie", IconType: "check" }
                ]
            },
            {
                Name: "Lactaattest - Basis Traject",
                Description: "Voor gestructureerde progressie",
                Price: "145",
                Unit: "traject",
                Featured: true,
                Features: [
                    { Text: "Alles uit Instap", IconType: "check" },
                    { Text: "Persoonlijk schema voor 3 maanden", IconType: "check" },
                    { Text: "Gericht werken aan meetbare progressie", IconType: "check" },
                    { Text: "E-mail support", IconType: "check" }
                ]
            },
            {
                Name: "Premium Coaching",
                Description: "Voor ambitieuze sporters met een doel",
                Price: "60",
                Unit: "maand",
                Featured: false,
                Features: [
                    { Text: "1 lactaattest inbegrepen", IconType: "check" },
                    { Text: "10% korting op extra testen", IconType: "check" },
                    { Text: "Maandelijkse optimalisatie schema", IconType: "check" },
                    { Text: "Toegang tot online platform", IconType: "check" },
                    { Text: "Unlimited vragen", IconType: "check" }
                ]
            }
        ],
        Testimonials: [
            {
                Author: "Thomas V.",
                Role: "10km loper",
                Quote: "Door de lactaattest begreep ik eindelijk in welke zone ik moest trainen. Mijn 10km tijd ging van 52 naar 46 minuten in 3 maanden!"
            },
            {
                Author: "Sarah L.",
                Role: "Triatleet",
                Quote: "De Premium Coaching heeft me geholpen om mijn eerste halve Ironman te voltooien zonder tegen de man met de hamer aan te lopen."
            },
            {
                Author: "Michiel D.",
                Role: "Wielrenner",
                Quote: "Na jaren rondjes rijden zonder echt progressie te boeken, gaf het Basis Traject me duidelijke richtlijnen en structuur."
            }
        ],
        CtaTitle: "Start vandaag met efficiënter trainen",
        CtaSubtitle: "Boek je lactaattest of vraag meer informatie aan via onderstaand formulier",
        CtaButtonLabel: "Contacteer ons",
        CtaButtonUrl: "/contact"
    }
};

async function seedLactaattestPage() {
    console.log(`Seeding lactaattest-page to ${STRAPI_URL}...`);

    try {
        const response = await fetch(`${STRAPI_URL}/api/lactaattest-page`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_API_TOKEN}`
            },
            body: JSON.stringify(lactaattestData)
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Failed to seed: ${response.status} - ${error}`);
        }

        const result = await response.json();
        console.log('Successfully seeded lactaattest-page!');
        console.log('Data:', JSON.stringify(result, null, 2));

        // Now publish the content
        console.log('\nPublishing content...');
        const publishResponse = await fetch(`${STRAPI_URL}/api/lactaattest-page`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_API_TOKEN}`
            },
            body: JSON.stringify({
                data: {
                    ...lactaattestData.data,
                    publishedAt: new Date().toISOString()
                }
            })
        });

        if (publishResponse.ok) {
            console.log('Content published successfully!');
        }

    } catch (error) {
        console.error('Error seeding data:', error.message);
        process.exit(1);
    }
}

seedLactaattestPage();
