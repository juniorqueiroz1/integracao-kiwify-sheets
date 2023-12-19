const functions = require('@google-cloud/functions-framework');
const { google } = require('googleapis');

functions.http('webhookHandler', async (req, res) => {
  try {

    // Recupere as credenciais da variável de ambiente
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    
    // Configure o cliente de autenticação
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Crie um cliente de autenticação autorizado
    const authClient = await auth.getClient();

    // Inicialize o cliente da API do Google Sheets
    const sheets = google.sheets({ version: 'v4', auth: authClient });


    // ID da sua planilha
    const spreadsheetId = 'project_id';

    // Nome da folha e intervalo
    const range = 'Página1';

    // Dados a serem adicionados
   const values = [
    [
      req.body.order_id,
      req.body.order_ref,
      req.body.order_status,
      req.body.payment_method,
      req.body.store_id,
      req.body.payment_merchant_id,
      req.body.installments,
      req.body.card_type,
      req.body.card_last4digits,
      req.body.card_rejection_reason,
      req.body.pix_code,
      req.body.pix_expiration,
      req.body.boleto_URL,
      req.body.sale_type,
      req.body.created_at,
      req.body.updated_at,
      req.body.Product.product_id,
      req.body.Product.product_name,
      req.body.Customer.full_name,
      req.body.Customer.email,
      req.body.Customer.mobile,
      req.body.Customer.CPF,
      req.body.Customer.ip,
      req.body.Commissions.charge_amount,
      req.body.Commissions.product_base_price,
      req.body.Commissions.kiwify_fee,
      req.body.Commissions.commissioned_stores[0].id,
      req.body.Commissions.commissioned_stores[0].type,
      req.body.Commissions.commissioned_stores[0].custom_name,
      req.body.Commissions.commissioned_stores[0].email,
      req.body.Commissions.commissioned_stores[0].value,
      req.body.Commissions.my_commission,
      req.body.Commissions.funds_status,
      req.body.Commissions.estimated_deposit_date,
      req.body.Commissions.deposit_date,
      req.body.TrackingParameters.src,
      req.body.TrackingParameters.sck,
      req.body.TrackingParameters.utm_source,
      req.body.TrackingParameters.utm_medium,
      req.body.TrackingParameters.utm_campaign,
      req.body.TrackingParameters.utm_content,
      req.body.TrackingParameters.utm_term,
      req.body.Subscription.id,
      req.body.Subscription.start_date,
      req.body.Subscription.next_payment,
      req.body.Subscription.status,
      req.body.Subscription.plan.id,
      req.body.Subscription.plan.name,
      req.body.Subscription.plan.frequency,
      req.body.Subscription.plan.qty_charges,
      req.body.Subscription.charges.completed[0].order_id,
      req.body.Subscription.charges.completed[0].amount,
      req.body.Subscription.charges.completed[0].status,
      req.body.Subscription.charges.completed[0].installments,
      req.body.Subscription.charges.completed[0].card_type,
      req.body.Subscription.charges.completed[0].card_last_digits,
      req.body.Subscription.charges.completed[0].card_first_digits,
      req.body.Subscription.charges.completed[0].created_at,
      req.body.Subscription.charges.future.map(charge => charge.charge_date).join(', '),
      req.body.subscription_id
    ],
  ];

    // Apêndice de valores à planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });

    // Envie uma resposta de sucesso
    res.send('Dados adicionados com sucesso ao Google Sheets');
  } catch (error) {
    // Em caso de erro, registre-o e envie uma resposta de erro
    console.error(error);
    res.status(500).send('Erro ao processar os dados');
  }
});
