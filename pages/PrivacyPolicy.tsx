import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div dir="rtl" className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-body">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black text-foreground mb-8">מדיניות פרטיות</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 font-body leading-relaxed">
          <p>עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">1. כללי</h2>
          <p>אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">2. המידע שאנו אוספים</h2>
          <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>שם מלא</li>
            <li>כתובת דואר אלקטרוני</li>
            <li>מספר טלפון</li>
            <li>מידע טכני כגון כתובת IP, סוג דפדפן ומערכת הפעלה</li>
            <li>נתוני שימוש באתר</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">3. אופן השימוש במידע</h2>
          <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>מתן השירותים המבוקשים</li>
            <li>שליחת תוכן שיווקי ועדכונים (בהסכמתך)</li>
            <li>שיפור חווית המשתמש באתר</li>
            <li>ניתוח סטטיסטי ומחקר</li>
            <li>עמידה בדרישות חוקיות</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">4. שיתוף מידע עם צדדים שלישיים</h2>
          <p>לא נמכור, נשכיר או נשתף את המידע האישי שלך עם צדדים שלישיים, למעט במקרים הבאים:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>ספקי שירות הפועלים מטעמנו (כגון שירותי דיוור)</li>
            <li>כאשר נדרש על פי חוק או צו בית משפט</li>
            <li>להגנה על זכויותינו או בטיחות המשתמשים</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">5. אבטחת מידע</h2>
          <p>אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה בלתי מורשית, שימוש לרעה או חשיפה.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">6. עוגיות (Cookies)</h2>
          <p>האתר עשוי להשתמש בעוגיות לצורך שיפור חווית הגלישה, ניתוח תנועה באתר והתאמת תוכן. באפשרותך לשלוט בהגדרות העוגיות דרך הדפדפן שלך.</p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">7. זכויותיך</h2>
          <p>בהתאם לחוק, עומדות לך הזכויות הבאות:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>עיון במידע האישי שלך</li>
            <li>תיקון מידע שגוי</li>
            <li>מחיקת המידע האישי שלך</li>
            <li>הסרה מרשימות דיוור</li>
          </ul>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-3">8. יצירת קשר</h2>
          <p>לכל שאלה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו באמצעות טופס יצירת הקשר באתר.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
