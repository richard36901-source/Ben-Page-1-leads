import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div dir="rtl" className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-body">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black text-foreground mb-8">תנאי שימוש</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 font-body leading-relaxed">
          <p>עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">1. הסכמה לתנאים</h2>
          <p>השימוש באתר זה מהווה הסכמה לתנאי השימוש המפורטים להלן. אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">2. תיאור השירות</h2>
          <p>האתר מספק מידע, תוכן חינוכי ושירותים בתחום השיווק הדיגיטלי. התוכן באתר מוצג למטרות מידע בלבד ואינו מהווה ייעוץ מקצועי.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">3. קניין רוחני</h2>
          <p>כל התוכן באתר, לרבות טקסטים, תמונות, סרטונים, עיצובים וסימני מסחר, הינם רכוש הבעלים ומוגנים על ידי חוקי קניין רוחני. אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתוכן ללא אישור מראש ובכתב.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">4. הגבלת אחריות</h2>
          <p>האתר והתוכן בו מוצגים "כמות שהם" (AS IS). אנו לא מתחייבים לדיוק, שלמות או עדכניות של המידע. לא נישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר או מהסתמכות על המידע המוצג בו.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">5. קישורים לאתרים חיצוניים</h2>
          <p>האתר עשוי להכיל קישורים לאתרים חיצוניים. אין לנו שליטה על תוכן אתרים אלו ואיננו אחראים לתוכנם או למדיניות הפרטיות שלהם.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">6. תקשורת שיווקית</h2>
          <p>בהשארת פרטים באתר, הנך מסכים לקבל תוכן שיווקי, לרבות דואר אלקטרוני והודעות טקסט. באפשרותך להסיר את עצמך מרשימת התפוצה בכל עת באמצעות לחיצה על קישור ההסרה בתחתית כל הודעה.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">7. שינויים בתנאים</h2>
          <p>אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. שינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">8. דין וסמכות שיפוט</h2>
          <p>תנאי שימוש אלה כפופים לחוקי מדינת ישראל. סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאים אלה נתונה לבתי המשפט המוסמכים בישראל.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">9. יצירת קשר</h2>
          <p>לכל שאלה בנוגע לתנאי השימוש, ניתן לפנות אלינו באמצעות טופס יצירת הקשר באתר.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
