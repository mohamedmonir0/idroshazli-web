import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, message, fileUrl, type } = await req.json();
    const apiKey = "3965697"; 
    const whatsappNumber = "393896616549"; 
    
    // تصميم الرسالة بناءً على النوع
    const text = `🚨 ${type === 'emergency' ? 'طلب طوارئ جديد' : 'طلب توظيف جديد'}\n\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n📝 التفاصيل: ${message}\n📄 الملف: ${fileUrl}`;
    
    const botUrl = `https://api.callmebot.com/whatsapp.php?phone=${whatsappNumber}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
    await fetch(botUrl);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
