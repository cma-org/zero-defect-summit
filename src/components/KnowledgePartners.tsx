import { Award } from "lucide-react";

const KnowledgePartners = () => {
  const partners = [
    {
      name: "Gansons",
      tagline: "Better Solutions Since 1947",
      logo: "https://www.gansons.com/images/logo.png"
    },
    {
      name: "Sotax",
      logo: "https://www.sotax.com/themes/custom/sotax/logo.svg"
    },
    {
      name: "Bectochem Lödige",
      tagline: "Process Technology",
      logo: "https://www.loedige.de/typo3conf/ext/sitepackage/Resources/Public/Images/logo.svg"
    },
    {
      name: "Hyderabad Tubes & Ducts (P) Ltd.",
      logo: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Knowledge Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              In collaboration with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border-2 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow min-h-[180px]"
              >
                {partner.logo ? (
                  <div className="mb-4 h-16 flex items-center justify-center w-full">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('hidden');
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                )}
                <h3 className="font-bold text-foreground text-sm mb-1">
                  {partner.name}
                </h3>
                {partner.tagline && (
                  <p className="text-xs text-muted-foreground">{partner.tagline}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgePartners;
